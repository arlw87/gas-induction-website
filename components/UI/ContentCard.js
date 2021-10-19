import Link from "next/link";
import classes from "./ContentCard.module.css";

const ContentCard = (props) => {
  return (
    <Link href={props.link}>
      <div className={classes.cardContainer}>
        <div>{props.title}</div>
        <div>{props.summary}</div>
      </div>
    </Link>
  );
};

export default ContentCard;
