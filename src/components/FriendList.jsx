import React from "react";

const FriendList = ({ selectedFriend, friends, onSelectFriend }) => {
  return (
    <div className="friend-list">
      <h3>Friends</h3>
      <ul>
        {friends.map((friend) => (
          <li
            className={
              selectedFriend && selectedFriend.name === friend.name
                ? "active"
                : undefined
            }
            key={friend.id}
            onClick={() => onSelectFriend(friend)}
          >
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
