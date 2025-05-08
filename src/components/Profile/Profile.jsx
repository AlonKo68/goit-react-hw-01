import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats: {followers, views, likes}} )  {
    return (
    <div className={css.profile}>
      <div>
        <img className={css.avatar}
          src={image}
          alt={name}
          width="200"
          height="200"
        />
        <p className={css.username}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list_stats}>
        <li className={css.item_stats}>
          <span className={css.stats}>Followers</span>
          <span className={css.stats_number}>{followers}</span>
        </li>
        <li className={css.item_stats}>
          <span className={css.stats}>Views</span>
          <span className={css.stats_number}>{views}</span>
        </li>
        <li className={css.item_stats}>
          <span className={css.stats}>Likes</span>
          <span className={css.stats_number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
