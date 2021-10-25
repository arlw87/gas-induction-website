import Footer from "./Footer";
import NavBar from "./NavBar";
import classes from "./Layout.module.css";
import NavBarWrapper from "./NavBarWrapper";

const Layout = (props) => {
  return (
    <div className={classes.page}>
      <NavBarWrapper></NavBarWrapper>
      <main className={classes.main}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
