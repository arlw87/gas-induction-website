import Hero from "./Hero";
import classes from "./HomeLayout.module.css";

const HomeLayout = () => {
  return (
    <div className={classes.HomeLayout}>
      <Hero></Hero>
    </div>
  );
};

export default HomeLayout;
