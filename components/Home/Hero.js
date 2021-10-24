import classes from "./Hero.module.css";

const Hero = (props) => {
  const btnClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.heroContainer}>
      <div className={classes.textContainer}>
        <div className={classes.textWrapper}>
          <h1>Gas Induction</h1>
          <p>
            Video lectures, written resources and useful links for anaesthetic
            novices
          </p>
          <button onClick={btnClickHandler}>Start Learning</button>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.heroImage}></div>
      </div>
    </div>
  );
};

export default Hero;
