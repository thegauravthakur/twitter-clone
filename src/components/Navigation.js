import { AiFillHome, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { CgMoreO, CgNotes } from "react-icons/cg";
import { NavContent } from "./NavContent";
import "../styles/navigation.css";
import { ProfileTile } from "./ProfileTile";
import TweetIcon from "../assets/icons/TweetIcon";

export function Navigation() {
  return (
    <div className="wrapper">
      <div className="navigation">
        <AiOutlineTwitter className="navigation__header" />
        <NavContent active Icon={AiFillHome} text="Home" />
        <NavContent Icon={FaHashtag} text="Explore" />
        <NavContent Icon={HiOutlineBell} text="Notifications" />
        <NavContent Icon={AiOutlineMail} text="Messages" />
        <NavContent Icon={BsBookmark} text="Bookmarks" />
        <NavContent Icon={CgNotes} text="Lists" />
        <NavContent Icon={IoPersonOutline} text="Profile" />
        <NavContent Icon={CgMoreO} text="More" />
        <button className="navigation__button">Tweet</button>
        <button className="navigation__miniButton">
          <TweetIcon />
        </button>
      </div>
      <ProfileTile />
      <img
        className="wrapper__photo"
        src="https://pbs.twimg.com/profile_images/1361135449566105600/eJN6okzW_bigger.jpg"
      />
    </div>
  );
}
