import classes from "./ContentPage.module.css";
import ContentSectionIndicator from "./ContentSectionIndicator";
import ContentOverview from "./ContentOverview";
import Content from "./Content";
import Acknowledgements from "./Acknowledgements";

const ContentPage = (props) => {
  const {
    sectionName,
    color,
    title,
    description,
    mediaLink,
    type,
    pageContent,
  } = props.content;

  //If there are no acknowledgements / resources there will not be a paragraph tag
  const hasResources = pageContent.includes("</p>");

  return (
    <article className={classes.article}>
      <ContentSectionIndicator color={color}>
        {sectionName}
      </ContentSectionIndicator>
      <div className={classes.wrapper}>
        <ContentOverview
          title={title}
          description={description}
        ></ContentOverview>
        <Content media={mediaLink} type={type}></Content>
        {hasResources && <Acknowledgements>{pageContent}</Acknowledgements>}
      </div>
    </article>
  );
};

export default ContentPage;
