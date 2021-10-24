import classes from "./PageContentWrapper.module.css";

const PageContentWrapper = (props) => {
  return <div className={classes.contentWrapper}>{props.children}</div>;
};

export default PageContentWrapper;
