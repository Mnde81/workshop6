import style from './LoginSection.module.css';
import logo from '../img/logo.png';


export function LoginSection () {

  return (
    <>
      <div className={style.backGround}>
        <header className={style.mainHeader}>
          <div className={style.mainlogo}>
            <img className={style.logo} src={logo} alt="Logo" />
          </div>
          <nav className={style.btnSelect}>
            <select className={style.languageSelect}>
              <option value="english">English</option>
              <option value="lithuanian">Lietuvių</option>
            </select>
            <button className={style.signInBtn}>Sign In</button>
          </nav>
        </header>
        <section className={style.content}>
          <h1 className={style.unlimited}>Unlimited movies,<br/> TV  shows, and more</h1>
          <h2 className={style.price}>Starts at EUR 7.99. Cancel anytime.</h2>
          <p className={style.enterEmail}>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className={style.emailForm}>
            <input type="email" placeholder="Email address" className={style.emailInput}/>
            <button className={style.getStartedButton}>Get Started</button>
          </div>
        </section>
        </div>
    </>
  );
}