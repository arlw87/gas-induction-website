import classes from "./ContentOverview.module.css";

const ContentOverview = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.descriptionContainer}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ContentOverview;
