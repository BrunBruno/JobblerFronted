import classes from "./Sumsub.module.scss";
import axios from "axios";

function Sumsub() {
  const onPutCSV = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/download_pdfs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes["side-bar"]}>
        <img src="sumsub-london-logos-idoVHh4Qme-removebg.png" />
      </div>
      <div className={classes.content}>
        <div className={classes.overwiev}>
          <h1>Sumsub panel</h1>
          <p>Automate database downloads and risk setting</p>
          <h2>Overview</h2>
          <div className={classes["overwiev-content"]}>
            <div className={classes.downloads}>
              <p>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.15"
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#6DACE7"
                  />
                  <path
                    d="M24 12.25C24 13.49 22.99 14.5 21.75 14.5H18.25C17.63 14.5 17.07 14.25 16.66 13.84C16.25 13.43 16 12.87 16 12.25C16 11.01 17.01 10 18.25 10H21.75C22.37 10 22.93 10.25 23.34 10.66C23.75 11.07 24 11.63 24 12.25Z"
                    fill="#6DACE7"
                  />
                  <path
                    d="M26.83 13.0301C26.6 12.8401 26.34 12.6901 26.06 12.5801C25.77 12.4701 25.48 12.7001 25.42 13.0001C25.08 14.7101 23.57 16.0001 21.75 16.0001H18.25C17.25 16.0001 16.31 15.6101 15.6 14.9001C15.08 14.3801 14.72 13.7201 14.58 13.0101C14.52 12.7101 14.22 12.4701 13.93 12.5901C12.77 13.0601 12 14.1201 12 16.2501V26.0001C12 29.0001 13.79 30.0001 16 30.0001H24C26.21 30.0001 28 29.0001 28 26.0001V16.2501C28 14.6201 27.55 13.6201 26.83 13.0301ZM16 20.2501H20C20.41 20.2501 20.75 20.5901 20.75 21.0001C20.75 21.4101 20.41 21.7501 20 21.7501H16C15.59 21.7501 15.25 21.4101 15.25 21.0001C15.25 20.5901 15.59 20.2501 16 20.2501ZM24 25.7501H16C15.59 25.7501 15.25 25.4101 15.25 25.0001C15.25 24.5901 15.59 24.2501 16 24.2501H24C24.41 24.2501 24.75 24.5901 24.75 25.0001C24.75 25.4101 24.41 25.7501 24 25.7501Z"
                    fill="#6DACE7"
                  />
                </svg>
                <span>Downlads</span>
              </p>
              <h2>55</h2>
            </div>
            <div className={classes.matches}>
              <p>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.1" cx="20" cy="20" r="20" fill="#AA7AEB" />
                  <path
                    d="M20 10C17.38 10 15.25 12.13 15.25 14.75C15.25 17.32 17.26 19.4 19.88 19.49C19.96 19.48 20.04 19.48 20.1 19.49C20.12 19.49 20.13 19.49 20.15 19.49C20.16 19.49 20.16 19.49 20.17 19.49C22.73 19.4 24.74 17.32 24.75 14.75C24.75 12.13 22.62 10 20 10Z"
                    fill="#AA7AEB"
                  />
                  <path
                    d="M25.08 22.15C22.29 20.29 17.74 20.29 14.93 22.15C13.66 23 12.96 24.15 12.96 25.38C12.96 26.61 13.66 27.75 14.92 28.59C16.32 29.53 18.16 30 20 30C21.84 30 23.68 29.53 25.08 28.59C26.34 27.74 27.04 26.6 27.04 25.36C27.03 24.13 26.34 22.99 25.08 22.15Z"
                    fill="#AA7AEB"
                  />
                </svg>
                <span>Name matches</span>
              </p>
              <h2>10</h2>
            </div>
            <div className={classes.upload}>
              <div className={classes.item}>
                <img src="1608710_upload_icon 2.png" />
                <span>Upload clients list</span>
              </div>
              <div className={classes.item}>
                <img src="1608710_upload_icon 2.png" />
                <span>Upload bank statement</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.analytics}>
          <h2>Analytics</h2>
        </div>
        <div className={classes.notes}>
          <h2>Add notes, risk, tag manually</h2>
          <div className={classes.panel}>
            <div className={classes.input}>
              <div className={classes["input-list"]}>
                <p>Please input:</p>
                <p>Applicatt ID:</p>
                <p>Risk points:</p>
                <p>Risk level:</p>
                <p>Note:</p>
              </div>
              <div className={classes["input-buttons"]}>
                <button>SUBMIT</button>
                <button>CLEAR</button>
              </div>
            </div>
            <div className={classes.response}>
              <p>Response:</p>
            </div>
          </div>
        </div>
        <div className={classes.buttons}>
          <button>Go to Sumsub dashboard</button>
          <button>Go to Clear Junction</button>
        </div>
      </div>
    </div>
  );
}

export default Sumsub;
