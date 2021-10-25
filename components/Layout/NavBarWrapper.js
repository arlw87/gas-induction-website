import { useMediaQuery } from "react-responsive";
import NavBar from "./NavBar";
import sections from "../../config/sections";
import NavBarMobile from "./NavBarMobile";

const NavBarWrapper = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const imageIcon = "/media/images/GasInductionIcon.png";

  return isDesktop ? (
    <NavBar icon={imageIcon} sections={sections}></NavBar>
  ) : (
    <NavBarMobile icon={imageIcon}></NavBarMobile>
  );
};

export default NavBarWrapper;
