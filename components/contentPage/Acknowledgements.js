import marked from "marked";
import classes from "./Acknowledgements.module.css";

const Acknowledgements = (props) => {
  console.log("content", props);

  return (
    <div className={classes.container}>
      <div dangerouslySetInnerHTML={{ __html: props.children }}></div>
    </div>
  );
};

export default Acknowledgements;
