import "../styles/profileTile.css";
import { RiMoreLine } from "react-icons/ri";

export function ProfileTile() {
  return (
    <div className="profileTile">
      <img
        className="profileTile__image"
        src="https://pbs.twimg.com/profile_images/1361135449566105600/eJN6okzW_bigger.jpg"
        alt=""
      />
      <div className="profileTile__info">
        <p className="profileTile__info__name">Gaurav Thakur</p>
        <p className="profileTile__info__username">@gauravcodes</p>
      </div>
      <RiMoreLine />
    </div>
  );
}
