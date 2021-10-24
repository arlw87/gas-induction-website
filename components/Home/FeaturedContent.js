import FeatureCard from "../UI/FeatureCard";
import classes from "./FeaturedContent.module.css";
import featured from "../../config/featured";

const FeaturedContent = () => {
  //randomise the content cards

  const featuredContentCards = featured.map((feat, index) => {
    return (
      <FeatureCard
        link={feat.link}
        media={feat.type}
        image={feat.image}
        article={feat.article}
        summary={feat.summary}
      ></FeatureCard>
    );
  });

  return (
    <div className={classes.featuredContainer}>
      <h2>Featured Content</h2>
      <hr className={classes.hr}></hr>
      <div className={classes.featureCards}>{featuredContentCards}</div>
    </div>
  );
};

export default FeaturedContent;
