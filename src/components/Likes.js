import React, { useState, useEffect } from "react";

function useLikes({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    liked ? setCount(count - 1) : setCount(count + 1);
    setLiked(!liked);
  };

  return { count, liked, handleLikeClick };
}

function Likes() {
  const { count, liked, handleLikeClick } = useLikes({ initialCount: 200 });

  useEffect(() => {}, []);

  return (
    <button onClick={handleLikeClick} data-testid="btn-likes">
      {liked ? "❤️" : "🖤"} {count}
    </button>
  );
}

export default Likes;
