import classes from "./SubjectSection.module.css";

const SubjectSection = (props) => {
  return (
    <section className={classes.sectionContainer}>{props.children}</section>
  );
};

export default SubjectSection;
