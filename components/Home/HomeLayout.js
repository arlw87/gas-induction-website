import Hero from "./Hero";
import Topics from "./Topics";
import classes from "./HomeLayout.module.css";
import PageContentWrapper from "../Layout/PageContentWrapper";

const HomeLayout = () => {
  return (
    <div className={classes.HomeLayout}>
      <Hero></Hero>
      <PageContentWrapper>
        <Topics></Topics>
      </PageContentWrapper>
    </div>
  );
};

export default HomeLayout;
