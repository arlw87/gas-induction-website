import SectionCard from "../UI/SectionCard";
import classes from "./Topics.module.css";
import sections from "../../config/sections";

const Topics = () => {
  return (
    <div className={classes.topicsContainer}>
      <h2>Topics</h2>
      <hr className={classes.hr}></hr>
      <p>
        We are a group of anaesthetic trainees hoping to give you near peer
        advice, tips and tricks to getting the most out of your first few months
        as an anaesthetist. Below are some topics to get you started.
      </p>
      <div className={classes.sectionCards}>
        {sections.map((section, index) => {
          return (
            <SectionCard
              sectionName={section.sectionName}
              sectionDescription={section.tag}
              color={section.color}
              link={section.link}
            ></SectionCard>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;
