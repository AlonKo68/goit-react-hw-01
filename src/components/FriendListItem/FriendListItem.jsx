import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friends: { avatar, name, isOnline }}) {
    const classNameStatus = clsx(isOnline ? css.online : css.offline )
    return (
        <li className={css.item_friends}>
            <img className={css.avatar} src={avatar} alt={name} width="70" height="70" />
            <p className={css.username}>{name}</p>
            <p className={classNameStatus}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </li>
    )
}