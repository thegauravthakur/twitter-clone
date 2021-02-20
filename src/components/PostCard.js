import "../styles/postCard.css";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { FiShare } from "react-icons/fi";

export function PostCard({
  image,
  name,
  username,
  time,
  likeCount,
  commentCount,
  retweetCount,
  description,
}) {
  return (
    <div className="postCard">
      <img src={image} alt={""} />
      <div>
        <div className="infoWrapper">
          <p className="infoWrapper__name">{name}</p>
          <p>{username}</p>
          <p>{time}</p>
        </div>
        <p className="postCard__description">{description}</p>
        <div className="postCard__footer">
          <div>
            <VscComment className="comment" />
            <p>{commentCount}</p>
          </div>
          <div>
            <AiOutlineRetweet className="retweet" />
            <p>{retweetCount}</p>
          </div>
          <div>
            <AiOutlineHeart className="like" />
            <p>{likeCount}</p>
          </div>
          <FiShare className="share" />
        </div>
      </div>
    </div>
  );
}
