import { AiFillHome, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { CgMoreO, CgNotes } from "react-icons/cg";
import { NavContent } from "./NavContent";
import "../styles/navigation.css";
import { ProfileTile } from "./ProfileTile";

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
        {/*<button className="navigation__button">Tweet</button>*/}
      </div>
      {/*<ProfileTile />*/}
    </div>
  );
}
