import fs from "fs";
import path from "path";
import ContentPage from "../../components/contentPage/ContentPage";
import ContentCard from "../../components/UI/ContentCard";

const NonClinicalPage = (props) => {
  return <ContentPage></ContentPage>;
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
  return {
    props: {
      slug: params.nonClinicalPage,
    },
  };
}
