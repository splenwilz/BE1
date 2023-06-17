import { useState } from 'react';
import styles from '../styles.module.css';
import axios from 'axios';


// const bcrypt = require('bcrypt');

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

interface LoginFormProps {
    
}

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {
    // const saltRounds = 10;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [redirect, setRedirect] = useState(false);

   
  
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
      
        try {
          await axios.post('https://be1web.onrender.com/api/user/login', {
            email,
            password
          }, {
            withCredentials: true
          });
          toast('Login successfully');
          setRedirect(true);
        } catch (error) {
          toast('An error occurred');
          console.error('Error logging in:', error);
        }
    }
      
  
    if(redirect){
        return <Navigate to={'/'} />
    }
   
    return ( 
        <div className={styles.content__container}>
            <ToastContainer />
            
            <div className={styles.content}>
            {/* <div className={styles.text}>Sign Up</div> */}
            <div>
        {/* <button onClick={notify}>Notify!</button> */}
      </div>
            <form onSubmit={login}>
                <div className={styles.logo__container}>
                    <img src="../images/logo.gif" alt="" className={styles.regislogo}/>
                </div>
                
                <div className={styles.field}>
                    <span className="bx bxs-envelope" />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        required 
                    />
                </div>
                <div className={styles.field}>
                    <span className="bx bxs-lock-alt" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={ev => setPassword(ev.target.value)}
                        required 
                    />
                </div>
                <button className={styles.registgration__button}>Sign in</button>
                {/* <h4>or Sign Up with social platforms</h4>
                <div className={styles.social_icon}>
                    <i className="bx bxl-facebook" />
                    <i className="bx bxl-discord-alt" />
                    <i className="bx bxl-twitter" />
                    <i className="bx bxl-dribbble" />
                </div> */}
                <div className={styles.foot}>
                    <a>Don't have an account?</a>
                    <a className={styles.in} href="/register">Sign Up</a>
                </div>
            </form>
        </div>
    </div>
     );
}
 
export default LoginForm;

