import "../styles/whatsHappening.css";
import { PermanentHappeningTile } from "./PermanentHappeningTile";
import { TrendingTile } from "./TrendingTile";

export function WhatsHappening() {
  return (
    <div className="happening">
      <p className="happening__header">What's happening</p>
      <PermanentHappeningTile />
      <TrendingTile name="China" tweet="2,222 tweets" />
      <TrendingTile name="National Flag" tweet="5,252 tweets" />
      <TrendingTile name="Shweeta" tweet="4,922 tweets" />
      <p className="happening__seeMore">See More</p>
    </div>
  );
}
