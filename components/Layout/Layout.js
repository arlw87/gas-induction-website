import Footer from "./Footer";
import classes from "./Layout.module.css";
import NavBarWrapper from "./NavBar/NavBarWrapper";

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
