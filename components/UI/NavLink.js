import Link from "next/link";
import { useState } from "react";
import classes from "./NavLink.module.css";
import { useRouter } from "next/router";

//NavLink is a link component that is colored if the current
//page is part of this section or the mouse is hovering over
//it

const NavLink = (props) => {
  const [hover, toggleHover] = useState(false);

  const router = useRouter();

  let isCurrentPage = false;

  //if the current page is in the link section
  if (router.route.includes(props.href)) {
    isCurrentPage = true;
  }

  const mouseAction = () => {
    toggleHover((hover) => !hover);
  };

  //style for link
  const colorLinkStyle = {
    color: props.hightlighColor,
  };

  let linkStyle = {};

  //if the current page is in this section or the
  //mouse is hovering over link then color the link text
  if (isCurrentPage || hover) {
    linkStyle = colorLinkStyle;
  }

  return (
    <Link href={props.href} passHref>
      <p
        className={classes.link}
        style={linkStyle}
        onMouseEnter={mouseAction}
        onMouseLeave={mouseAction}
      >
        {props.children}
      </p>
    </Link>
  );
};

export default NavLink;
