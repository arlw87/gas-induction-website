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

  return (
    <article>
      <ContentSectionIndicator color={color}>
        {sectionName}
      </ContentSectionIndicator>
      <ContentOverview
        title={title}
        description={description}
      ></ContentOverview>
      <Content media={mediaLink} type={type}></Content>
      <Acknowledgements>{pageContent}</Acknowledgements>
    </article>
  );
};

export default ContentPage;
