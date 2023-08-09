import { useNavigate } from "react-router-dom";
import classes from "./HomePage.module.scss";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div
          className={classes.logo}
          onClick={() => {
            navigate("/");
          }}
        >
          jobbler
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>menu</li>
            <li>license</li>
            <li>about</li>
          </ul>
        </nav>
      </header>
      <div className={classes.con}>
        <div className={classes.content}>
          <div className={classes.intro}>
            <h1>Automate</h1>
            <h2>Your Tasks</h2>
          </div>
          <div className={classes.image}>
            <img src="public/icon.png" />
          </div>
        </div>
        <div className={classes.buttons}>
          <button
            onClick={() => {
              navigate("/sumsub");
            }}
          >
            sumsub
          </button>
          <button
            onClick={() => {
              navigate("/kraken");
            }}
          >
            kraken
          </button>
          <button
            onClick={() => {
              navigate("/b2c2");
            }}
          >
            B2C2
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
