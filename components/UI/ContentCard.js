import Link from "next/link";

const ContentCard = (props) => {
  return (
    <Link href={props.link}>
      <div>
        <div>{props.title}</div>
        <div>{props.summary}</div>
      </div>
    </Link>
  );
};

export default ContentCard;
