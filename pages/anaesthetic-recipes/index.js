import SectionHeader from "../../components/UI/SectionHeader";
import sections from "../../config/sections";
import { useRouter } from "next/router";

//Do not change this
const sectionID = 2;

const NonClinicalWorkSection = () => {
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
    <SectionHeader
      title={sectionName}
      tag={tag}
      backgroundColor={color}
    ></SectionHeader>
  );
};

export default NonClinicalWorkSection;
