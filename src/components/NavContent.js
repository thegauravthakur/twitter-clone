import "../styles/navContent.css";

export function NavContent({ Icon, text, active }) {
  return (
    <div className={`navContent ${active && "navContent--active"}`}>
      <Icon className="navContent__icon" />
      <p className="navContent__text">{text}</p>
    </div>
  );
}
