import classes from "./SectionCard.module.css";

const SectionCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.titleWrapper}>
        <h2>Clinical Induction</h2>
      </div>
      <div className={classes.textWrapper}>
        <p>Resources to aid the first few weeks in anaesthesia</p>
      </div>
    </div>
  );
};

export default SectionCard;
