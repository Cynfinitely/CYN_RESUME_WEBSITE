import { profile } from "@/data/profile";

const TIME_ZONE = "Europe/Helsinki";

function helsinkiDateParts(now: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(now);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    dayName: get("weekday"),
    day: get("day"),
    month: get("month"),
    year: Number(get("year")),
    // en-CA formats as YYYY-MM-DD
    iso: new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(now),
  };
}

export function Header() {
  const now = new Date();
  const { dayName, day, month, year, iso } = helsinkiDateParts(now);

  // Derive a stable-looking edition number from the date (days since an epoch)
  const epoch = Date.UTC(2019, 0, 1);
  const editionNo = Math.floor((Date.parse(iso) - epoch) / 86_400_000) + 1;
  const vol = year - 2019 + 1;

  return (
    <header className="site-header">
      <div className="site-header__content">

        {/* Edition metadata bar */}
        <div className="site-header__edition-bar">
          <span>Est. 2019 &middot; Vol. {vol}, No. {editionNo}</span>
          <span className="site-header__edition-location">{profile.location}</span>
          <span>Free</span>
        </div>

        {/* Masthead row: roles | name | date */}
        <div className="site-header__masthead-row">
          <div className="role-box">
            {profile.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>

          <div className="site-header__title-wrap">
            <h1 className="masthead">{profile.name}</h1>
          </div>

          <time className="site-header__date" dateTime={iso}>
            <span>{dayName}</span>
            <span>{day} {month}</span>
            <span>{year}</span>
          </time>
        </div>

        {/* Double-rule below masthead */}
        <hr className="site-header__masthead-rule" aria-hidden="true" />
      </div>

      <p className="subhead">{profile.tagline}</p>
    </header>
  );
}
