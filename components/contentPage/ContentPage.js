import classes from "./ContentPage.module.css";
import ContentSectionIndicator from "./ContentSectionIndicator";
import ContentOverview from "./ContentOverview";

const ContentPage = (props) => {
  const { sectionName, color, title, description } = props.content;

  return (
    <article>
      <ContentSectionIndicator color={color}>
        {sectionName}
      </ContentSectionIndicator>
      <ContentOverview
        title={title}
        description={description}
      ></ContentOverview>
    </article>
  );
};

export default ContentPage;
