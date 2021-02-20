import "../styles/sidebar.css";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { WhatsHappening } from "./WhatsHappening";
import { useState } from "react";

export function SideBar() {
  const [active, setActive] = useState(false);
  const [quickActive, setQuickActive] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <BsSearch
          className={`sidebar__header__searchIcon ${
            quickActive && "sidebar__header__searchIcon--active"
          }`}
        />
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          onBlur={() => {
            setQuickActive(false);
            setTimeout(() => setActive(false), 300);
          }}
          onFocus={() => {
            setQuickActive(true);
            setActive(true);
          }}
          placeholder="Search Twitter"
        />
        {text.length > 0 && active && (
          <AiFillCloseCircle
            onClick={() => setText("")}
            className="sidebar__header__closeIcon"
          />
        )}
      </div>
      <WhatsHappening />
    </div>
  );
}
