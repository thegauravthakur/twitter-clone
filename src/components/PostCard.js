import "../styles/postCard.css";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
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
            <VscComment />
            <p>{commentCount}</p>
          </div>
          <div>
            <AiOutlineRetweet />
            <p>{retweetCount}</p>
          </div>
          <div>
            <AiOutlineHeart />
            <p>{likeCount}</p>
          </div>
          <FiShare />
        </div>
      </div>
    </div>
  );
}
