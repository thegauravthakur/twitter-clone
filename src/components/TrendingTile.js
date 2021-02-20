import "../styles/trendingTile.css";
import { FiMoreHorizontal } from "react-icons/fi";

export function TrendingTile({ name, tweet }) {
  return (
    <div className="trendingTile">
      <div className="categoryWrapper">
        <p>Trending in India</p>
        <FiMoreHorizontal />
      </div>
      <p className="trendingTile__heading">{name}</p>
      <p className="trendingTile__tweetCount">{tweet}</p>
    </div>
  );
}
