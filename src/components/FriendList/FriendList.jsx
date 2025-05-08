import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
export default function FriendList({itemsFriend}) {
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {itemsFriend.map((item) => (
		      <FriendListItem friends={item} />
      ))}
    </ul>
  );
}