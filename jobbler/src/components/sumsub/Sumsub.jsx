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
      <div className={classes.content}></div>
      <label>
        upload file
        <input
          type="file"
          onChange={(event) => {
            onPutCSV(event);
          }}
        />
      </label>
    </div>
  );
}

export default Sumsub;
