import SectionHeader from "../../components/UI/SectionHeader";
import sections from "../../config/sections";

//Do not change this
const sectionID = 4;

const NonClinicalWorkSection = () => {
  //Get Section Title and Tagline
  //As this is for a static generated website no need to useEffect
  //to run on mount

  const { sectionName, tag, color } = sections.find(
    (section) => section.id === sectionID
  );

  return (
    <SectionHeader
      title={sectionName}
      tag={tag}
      backgroundColor={color}
    ></SectionHeader>
  );
};

export default NonClinicalWorkSection;
