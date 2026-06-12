import { profile } from "@/data/profile";

export function Header() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString("en-US", { month: "long" });

  return (
    <header className="site-header">
      <div className="site-header__content">
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
            <span>{date}</span>
            <span>{month}</span>
          </div>
        </div>
      </div>

      <p className="subhead">{profile.tagline}</p>
    </header>
  );
}
