import Sumsub from "../sumsub/Sumsub";
import classes from "./MainPage.module.scss";

function MainPage(props) {
  return (
    <div className={classes.container}>
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
            props.setContent(<Sumsub />);
          }}
        >
          sumsub
        </button>
        <button>kraken</button>
        <button>B2C2</button>
      </div>
    </div>
  );
}

export default MainPage;
