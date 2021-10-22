import classes from "./ContentPage.module.css";
import ContentSectionIndicator from "./ContentSectionIndicator";

const ContentPage = (props) => {
  const { sectionName, color } = props.content;

  return (
    <article>
      <ContentSectionIndicator color={color}>
        {sectionName}
      </ContentSectionIndicator>
    </article>
  );
};

export default ContentPage;
