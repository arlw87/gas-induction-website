import fs from "fs";
import path from "path";
import ContentPage from "../../components/contentPage/ContentPage";
import { useRouter } from "next/router";
import { getSectionDetails } from "../../lib/helperFunctions";
import matter from "gray-matter";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import marked from "marked";

const AnaestheticRecipesPage = (props) => {
  const router = useRouter();
  const url = router.pathname.slice(1);
  const { sectionName, color } = getSectionDetails(url);
  const contentDetails = {
    sectionName,
    color,
    title: props.frontMatter.title,
    description: props.frontMatter.description,
    mediaLink: props.frontMatter.media,
    type: props.frontMatter.type,
    pageContent: props.HTMLContent,
  };

  return <ContentPage content={contentDetails}></ContentPage>;
};

export default AnaestheticRecipesPage;

export async function getStaticPaths() {
  //get all the non clinical content
  const sectionName = "anaesthetic-recipes";

  //get files from the content/non-clinical folder
  const files = fs.readdirSync(path.join("content", sectionName));

  const paths = files.map((file) => {
    return {
      params: {
        recipes: file.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sectionName = "anaesthetic-recipes";

  console.log(path.join("content", sectionName, params.recipes));

  //get files from the content/non-clinical folder
  const markdownWithMatter = fs.readFileSync(
    path.join("content", sectionName, `${params.recipes}.md`)
  );

  const { data: frontMatter, content } = matter(markdownWithMatter);

  const window = new JSDOM("").window;
  const DOMPurify = createDOMPurify(window);
  const HTMLContent = DOMPurify.sanitize(marked(content));

  return {
    props: {
      frontMatter,
      HTMLContent,
    },
  };
}
