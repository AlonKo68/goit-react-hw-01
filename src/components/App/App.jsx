import React from 'react';
import css from './App.module.css';

import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      {/* Завдання 1 - Профіль соціальної мережі */}
      <Profile 
      name={userData[0].username}
      tag={userData[0].tag}
      location={userData[0].location}
      image={userData[0].avatar}
      stats={userData[0].stats}
      />
      {/* Завдання 2 - Список друзів */}
      <FriendList  itemsFriend={friends} />

      {/* Завдання 3 - Історія транзакцій*/}
      <TransactionHistory items={transactions} />
    </>
 )
};

