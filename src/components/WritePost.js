import { GiEarthAmerica } from "react-icons/gi";
import {
  AiOutlinePicture,
  AiOutlineSmile,
  AiOutlineSchedule,
} from "react-icons/ai";
import { RiFileGifLine } from "react-icons/ri";
import { CgPoll } from "react-icons/cg";
import "../styles/writePost.css";
import { useState, useEffect, useRef } from "react";

export function WritePost() {
  const [value, setValue] = useState("");
  const [showPrivacy, setShowPrivacy] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  }, [value]);

  return (
    <div className="writePost">
      <img
        className="writePost__image"
        src="https://pbs.twimg.com/profile_images/1361135449566105600/eJN6okzW_bigger.jpg"
        alt=""
      />
      <div className="writePost__wrapper">
        <textarea
          onFocus={() => setShowPrivacy(true)}
          rows={1}
          ref={inputRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="What's happening?"
        />
        {showPrivacy && (
          <div className="writePost__wrapper__privacy">
            <GiEarthAmerica />
            <p>Everyone can reply</p>
          </div>
        )}
        {showPrivacy && <hr />}
        <div
          style={{ marginTop: !showPrivacy ? 20 : 0 }}
          className="writePost__wrapper__footer"
        >
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
