import Hero from "./Hero";
import Topics from "./Topics";
import classes from "./HomeLayout.module.css";
import PageContentWrapper from "../Layout/PageContentWrapper";
import FeaturedContent from "./FeaturedContent";
import { useState } from "react";

const HomeLayout = () => {
  const [scrollToTopics, setScrollToTopics] = useState(false);

  const handleScroll = () => {
    setScrollToTopics(true);
  };

  const resetScrollState = () => {
    setScrollToTopics(false);
  };

  return (
    <div className={classes.HomeLayout}>
      <Hero handleScroll={handleScroll}></Hero>
      <PageContentWrapper>
        <FeaturedContent></FeaturedContent>
        <Topics
          scrollToTopics={scrollToTopics}
          resetScrollState={resetScrollState}
        ></Topics>
      </PageContentWrapper>
    </div>
  );
};

export default HomeLayout;
