import React, { useEffect, useState, useContext } from 'react';
import styles from "../styles.module.css";
import axios from 'axios';

function Header() {
  const [email, setEmail] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://be1web.onrender.com/api/user/profile',
  //         {
  //           withCredentials: true
  //         }
  //       );
  //       setEmail(response.data.email);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching profile:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  async function logout(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://be1web.onrender.com/api/user/logout'
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  return (
    <div>
      <a href="../">
        <img src="../images/logo.gif" alt="" className={styles.regislogo}/>
      </a>
      <ul className={styles.topnav}>
        {email ? (
          <>
            <li className="">
              <a href="/login">{email}</a>
            </li>
            <li className="">
              <a href="/logout" onClick={logout}>Logout</a>
            </li>
          </>
        ) : (
          <>
            <li className="">
              <a href="/login">Login</a>
            </li>
            <li className="">
              <a href="/register">Register</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
