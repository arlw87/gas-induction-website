import SectionHeader from "../../components/UI/SectionHeader";
import sections from "../../config/sections";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ContentCard from "../../components/UI/ContentCard";
import SubjectSection from "../../components/Layout/SubjectSection";

//Do not change this
const sectionID = 4;

const NonClinicalWorkSection = (props) => {
  //Get Section Title and Tagline
  //As this is for a static generated website no need to useEffect
  //to run on mount

  //get the currentRoute
  const router = useRouter();
  const url = router.pathname.slice(1);

  const { sectionName, tag, color } = sections.find(
    (section) => section.link === url
  );

  console.log(props.pages);

  const cards = props.pages.map((page, index) => {
    return (
      <ContentCard
        link="/"
        title={page.frontMatter.title}
        summary={page.frontMatter.summary}
        key={index}
      ></ContentCard>
    );
  });

  console.log(cards);

  return (
    <>
      <SectionHeader
        title={sectionName}
        tag={tag}
        backgroundColor={color}
      ></SectionHeader>
      <SubjectSection>{cards}</SubjectSection>
    </>
  );
};

export default NonClinicalWorkSection;

export const getStaticProps = async () => {
  //get files from the content/non-clinical folder
  const files = fs.readdirSync(path.join("content", "non-clinical"));

  //get pages and front matter
  const pages = files.map((filename) => {
    const slug = filename.replace(".md", "");

    //get front matter
    const markdownWithMatter = fs.readFileSync(
      path.join("content", "non-clinical", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMatter);

    return {
      slug,
      frontMatter,
    };
  });

  console.log(pages);

  return {
    props: {
      pages,
    },
  };
};
