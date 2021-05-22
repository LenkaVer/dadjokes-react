import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [countLike, setCountLike] = useState(props.likes);
  const [countDislike, setCountDislike] = useState(props.dislikes);
  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            {
              <img
                className="user-avatar"
                src={props.userAvatar}
                alt="user-avatar"
              />
            }
            <p className="user-name">{props.userName}</p>
          </div>

          <p className="joke__text">{props.text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            onClick={() => setCountLike(countLike + 1)}
            className="btn-like btn-like--up"
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {countLike}
          </span>
          <button
            id="btn-down"
            onClick={() => setCountDislike(countDislike + 1)}
            className="btn-like btn-like--down"
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {countDislike}
          </span>
        </div>
      </div>
    </>
  );
};
