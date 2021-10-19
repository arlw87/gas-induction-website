import SectionHeader from "../../components/UI/SectionHeader";
import sections from "../../config/sections";
import { useRouter } from "next/router";
//fs wont work in the client side, but getStaticProps runs on the server side, so if it is
//used in the getStaticProps function there wont be an error
//import fs from "fs";
//import path from "path";

//Do not change this
const sectionID = 1;

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

  return (
    <>
      <SectionHeader
        title={sectionName}
        tag={tag}
        backgroundColor={color}
      ></SectionHeader>
      <section>{props.title}</section>
    </>
  );
};

export default NonClinicalWorkSection;

export const getStaticProps = async () => {
  //fetch markup
  //const files = fs.readdirSync(path.join("content"));

  return {
    props: {
      title: "Hello World",
    },
  };
};
