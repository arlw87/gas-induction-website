import FeatureCard from "../UI/FeatureCard";
import classes from "./FeaturedContent.module.css";
import featured from "../../config/featured";
import { randomNumberArray } from "../../lib/helperFunctions";

const FeaturedContent = () => {
  //randomise the content cards
  //const [r1, r2, r3] = randomNumberArray(3, 3);

  //pick random feature objects from the arrasy
  // const randomisedFeaturedArray = featured.filter((val, index) => {
  //   return index === r1 || index === r2 || index === r3;
  // });
  const randomisedFeaturedArray = featured;

  const featuredContentCards = randomisedFeaturedArray.map((feat, index) => {
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
