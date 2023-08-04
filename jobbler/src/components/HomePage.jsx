import { useEffect, useState } from "react";
import classes from "./HomePage.module.scss";
import MainPage from "./main/MainPage";

function HomePage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(<MainPage setContent={setContent} />);
  }, []);

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div
          className={classes.logo}
          onClick={() => {
            setContent(<MainPage setContent={setContent} />);
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
      {content}
    </div>
  );
}

export default HomePage;
