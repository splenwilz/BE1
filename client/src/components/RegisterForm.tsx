import { useState } from 'react';
import styles from '../styles.module.css';
import axios from 'axios';


// const bcrypt = require('bcrypt');

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface RegisterFormProps {
    
}

const RegisterForm: React.FunctionComponent<RegisterFormProps> = () => {
    // const saltRounds = 10;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

   
  
    async function register(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      
      try {
        await axios.post('https://be1web.onrender.com/api/user/register', {
          email,
          password,
        });
        toast('Account successfully created!');
      } catch (error) {
        
        toast('Sorry, but the email you provided is already associated with an existing account. Please choose a different email address and try again. ');

        console.error('Error fetching data:', error);
      }
    }
  

   
    return ( 
        <div className={styles.content__container}>
            <ToastContainer />            
            <div className={styles.content}>                
                <form onSubmit={register}>
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
                    <button className={styles.registgration__button}>Sign Up</button>
                    {/* <h4>or Sign Up with social platforms</h4>
                    <div className={styles.social_icon}>
                        <i className="bx bxl-facebook" />
                        <i className="bx bxl-discord-alt" />
                        <i className="bx bxl-twitter" />
                        <i className="bx bxl-dribbble" />
                    </div> */}
                    <div className={styles.foot}>
                        <a>Already have an account?</a>
                        <a className={styles.in} href="#">Sign In</a>
                    </div>
                </form>
                        </div>
                    </div>
     );
}
 
export default RegisterForm;

