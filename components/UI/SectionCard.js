import classes from "./SectionCard.module.css";
import Link from "next/link";

const SectionCard = (props) => {
  const backgroundStyle = {
    backgroundColor: props.color,
  };

  return (
    <Link href={`/${props.link}`} passHref>
      <div className={classes.card} style={backgroundStyle}>
        <div className={classes.titleWrapper}>
          <h2>{props.sectionName}</h2>
        </div>
        <div className={classes.textWrapper}>
          <p>{props.sectionDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default SectionCard;
