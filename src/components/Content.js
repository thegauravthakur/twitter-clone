import "../styles/content.css";
import StarIcon from "../assets/icons/StarIcon";
import { Posts } from "./Posts";
import { WritePost } from "./WritePost";

export function Content() {
  return (
    <div className="content">
      <div className="content__header">
        <p>Home</p>
        <StarIcon />
      </div>
      <WritePost />
      <Posts />
    </div>
  );
}
