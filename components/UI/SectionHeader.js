import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.textContainer}>
        <h1>{props.title}</h1>
        <p>{props.tag}</p>
      </div>
      <div className={classes.imageContainer}>
        <h3>An Image</h3>
      </div>
    </header>
  );
};

export default SectionHeader;
