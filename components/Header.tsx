import { profile } from "@/data/profile";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function Header() {
  const now = new Date();
  const dayName = DAYS[now.getDay()];
  const day = now.getDate();
  const month = MONTHS[now.getMonth()];
  const year = now.getFullYear();

  // Derive a stable-looking edition number from the date (days since an epoch)
  const epoch = new Date(2019, 0, 1);
  const editionNo = Math.floor((now.getTime() - epoch.getTime()) / 86_400_000) + 1;
  const vol = Math.floor((now.getFullYear() - 2019)) + 1;

  return (
    <header className="site-header">
      <div className="site-header__content">

        {/* Edition metadata bar */}
        <div className="site-header__edition-bar" aria-label="Edition details">
          <span>Est. 2019 &middot; Vol. {vol}, No. {editionNo}</span>
          <span className="site-header__edition-location">Helsinki, Finland</span>
          <span>Free</span>
        </div>

        {/* Masthead row: roles | name | date */}
        <div className="site-header__masthead-row">
          <div className="role-box" aria-label="Professional roles">
            {profile.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>

          <div className="site-header__title-wrap">
            <h1 className="masthead">{profile.name}</h1>
          </div>

          <div className="site-header__date" aria-label="Today's date">
            <span>{dayName}</span>
            <span>{day} {month}</span>
            <span>{year}</span>
          </div>
        </div>

        {/* Double-rule below masthead */}
        <hr className="site-header__masthead-rule" aria-hidden="true" />
      </div>

      <p className="subhead">{profile.tagline}</p>
    </header>
  );
}
