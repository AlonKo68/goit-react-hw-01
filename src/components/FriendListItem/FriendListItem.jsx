import css from './FriendListItem.module.css';

export default function FriendListItem({ friends: {id, avatar, name, isOnline }}) {
    return (
        <li key={id}>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
            <p>{isOnline ? "Online" : "Offline"}</p>
        </li>
    )
}