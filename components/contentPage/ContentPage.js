import classes from "./ContentPage.module.css";
import ContentSectionIndicator from "./ContentSectionIndicator";
import ContentOverview from "./ContentOverview";
import Content from "./Content";

const ContentPage = (props) => {
  const { sectionName, color, title, description, mediaLink } = props.content;

  return (
    <article>
      <ContentSectionIndicator color={color}>
        {sectionName}
      </ContentSectionIndicator>
      <ContentOverview
        title={title}
        description={description}
      ></ContentOverview>
      <Content media={mediaLink}></Content>
    </article>
  );
};

export default ContentPage;
