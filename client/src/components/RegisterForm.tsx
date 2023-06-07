import styles from '../styles.module.css';
interface RegisterFormProps {
    
}
 
const RegisterForm: React.FunctionComponent<RegisterFormProps> = () => {
    return ( 
        <div className={styles.content}>
          <div className={styles.text}>Sign Up</div>
          <form action="#">
          <img src="../images/logo.gif" alt="" className={styles.regislogo}/>
              
              <div className={styles.field}>
                  <span className="bx bxs-envelope" />
                  <input type="email" placeholder="Email" required />
              </div>
              <div className={styles.field}>
                  <span className="x bxs-lock-alt" />
                  <input type="password" placeholder="Password" required />
              </div>
              <button>Sign Up</button>
              <h4>or Sign Up with social platforms</h4>
              <div className="social_icon">
                  <i className="bx bxl-facebook" />
                  <i className="bx bxl-discord-alt" />
                  <i className="bx bxl-twitter" />
                  <i className="bx bxl-dribbble" />
              </div>
              <div className={styles.foot}>
                  <a>Already have an account?</a>
                  <a className={styles.in} href="#">Sign In</a>
              </div>
          </form>
          <div className="drak-light">
              <i className="bx bx-moon moon" />
              <i className="bx bx-sun sun" />
          </div>
      </div>
     );
}
 
export default RegisterForm;