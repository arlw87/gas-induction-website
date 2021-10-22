import fs from "fs";
import path from "path";
import ContentPage from "../../components/contentPage/ContentPage";
import { useRouter } from "next/router";
import { getSectionDetails } from "../../lib/helperFunctions";
import matter from "gray-matter";

const NonClinicalPage = (props) => {
  const router = useRouter();
  const url = router.pathname.slice(1);
  const { sectionName, color } = getSectionDetails(url);
  const contentDetails = {
    sectionName,
    color,
    title: props.frontMatter.title,
    description: props.frontMatter.summary,
  };

  return <ContentPage content={contentDetails}></ContentPage>;
};

export default NonClinicalPage;

export async function getStaticPaths() {
  //get all the non clinical content
  const sectionName = "non-clinical";

  //get files from the content/non-clinical folder
  const files = fs.readdirSync(path.join("content", sectionName));

  const paths = files.map((file) => {
    return {
      params: {
        nonClinicalPage: file.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sectionName = "non-clinical";

  console.log(path.join("content", sectionName, params.nonClinicalPage));

  //get files from the content/non-clinical folder
  const markdownWithMatter = fs.readFileSync(
    path.join("content", sectionName, `${params.nonClinicalPage}.md`)
  );

  const { data: frontMatter } = matter(markdownWithMatter);

  console.log("data", frontMatter);

  return {
    props: {
      frontMatter,
    },
  };
}
