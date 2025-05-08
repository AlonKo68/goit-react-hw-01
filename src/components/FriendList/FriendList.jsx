import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
export default function FriendList({itemsFriend}) {
  return (
    <ul className={css.list_friends}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {itemsFriend.map((item) => (
		      <FriendListItem friends={item} key={item.id}/>
      ))}
    </ul>
  );
}