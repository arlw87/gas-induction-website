import SectionHeader from "../../components/UI/SectionHeader";
import sections from "../../config/sections";

//Do not change this
const sectionID = 4;

const NonClinicalWorkSection = () => {
  //Get Section Title and Tagline
  //As this is for a static generated website no need to useEffect
  //to run on mount

  const { sectionName, tag } = sections.find(
    (section) => section.id === sectionID
  );

  return <SectionHeader title={sectionName} tag={tag}></SectionHeader>;
};

export default NonClinicalWorkSection;
