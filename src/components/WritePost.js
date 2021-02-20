import { GiEarthAmerica } from "react-icons/gi";
import {
  AiOutlinePicture,
  AiOutlineSmile,
  AiOutlineSchedule,
} from "react-icons/ai";
import { RiFileGifLine } from "react-icons/ri";
import { CgPoll } from "react-icons/cg";
import "../styles/writePost.css";

export function WritePost() {
  return (
    <div className="writePost">
      <img
        className="writePost__image"
        src="https://pbs.twimg.com/profile_images/1361135449566105600/eJN6okzW_bigger.jpg"
        alt=""
      />
      <div className="writePost__wrapper">
        <textarea placeholder="What's happening?" />
        <div className="writePost__wrapper__privacy">
          <GiEarthAmerica />
          <p>Everyone can reply</p>
        </div>
        <hr />
        <div className="writePost__wrapper__footer">
          <div className="writePost__wrapper__footer__icons">
            <AiOutlinePicture />
            <RiFileGifLine />
            <CgPoll />
            <AiOutlineSmile />
            <AiOutlineSchedule />
          </div>
          <button>Tweet</button>
        </div>
      </div>
    </div>
  );
}
