import "../styles/sidebar.css";
import { BsSearch } from "react-icons/bs";
import { WhatsHappening } from "./WhatsHappening";
import { TrendingTile } from "./TrendingTile";

export function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <BsSearch className="sidebar__header__searchIcon" />
        <input placeholder="Search Twitter" />
      </div>
      <WhatsHappening />
    </div>
  );
}
