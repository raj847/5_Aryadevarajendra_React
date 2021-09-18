import React from "react";
import classes from "./Review.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Review() {
  const data = useSelector((state) => state.data.data);
  console.log(data.fullName);
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <ul>
          <li className={classes.data}>
            <p>Full Name</p>
            <p>: {data.name}</p>
          </li>
          <li className={classes.data}>
            <p>Email Address</p>
            <p>: {data.email}</p>
          </li>
          <li className={classes.data}>
            <p>Phone Number</p>
            <p>: {data.phone}</p>
          </li>
          <li className={classes.data}>
            <p>Nationality</p>
            <p>: {data.nationality}</p>
          </li>
          <li className={classes.data}>
            <p>{data.message}</p>
          </li>
        </ul>
        <div className={`${classes.feedback} ${classes.fullwidth}`}>
          Thanks for contacting us!
          <br />
          We will be in touch with you shortly.
        </div>
        <div className={classes.fullwidth}>
          <Link to="/">
            <button className={classes.btn}>Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Review;
