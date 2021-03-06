import SectionHeader from "../../components/UI/SectionHeader";
import sections from "../../config/sections";
import { useRouter } from "next/router";
import ContentCard from "../../components/UI/ContentCard";
import SubjectSection from "../../components/Layout/SubjectSection";
import {
  getSectionDetails,
  LightenDarkenColor,
} from "../../lib/helperFunctions";
import path from "path";
import matter from "gray-matter";
import fs from "fs";

const TechnicalTipsSection = (props) => {
  //Get Section Title and Tagline
  //As this is for a static generated website no need to useEffect
  //to run on mount

  //get the currentRoute
  const router = useRouter();

  //console.log(router);

  const url = router.pathname.slice(1);

  const { sectionName, tag, color } = getSectionDetails(url);

  const cards = props.pages.map((page, index) => {
    let num = 0;

    if (index > 10) {
      num = (index + 1) % 10;
    } else {
      num = index + 1;
    }

    const backgroundColor = LightenDarkenColor(color, (num + 1) * -15);

    return (
      <ContentCard
        link={`/${url}/${page.slug}`}
        title={page.frontMatter.title}
        summary={page.frontMatter.summary}
        type={page.frontMatter.type}
        key={index}
        backgroundColor={backgroundColor}
      ></ContentCard>
    );
  });

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

export default TechnicalTipsSection;

export async function getStaticProps() {
  const sectionName = "technical-tips";

  //get files from the content/non-clinical folder
  const files = fs.readdirSync(path.join("content", sectionName));

  //get pages and front matter
  const pages = files.map((filename) => {
    const slug = filename.replace(".md", "");

    //get front matter
    const markdownWithMatter = fs.readFileSync(
      path.join("content", sectionName, filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMatter);

    return {
      slug,
      frontMatter,
    };
  });

  //console.log("pages", pages);

  return {
    props: {
      pages,
    },
  };
}
