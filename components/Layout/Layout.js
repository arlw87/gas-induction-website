import Footer from "./Footer";
import NavBar from "./NavBar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.page}>
      <NavBar></NavBar>
      <main className={classes.main}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
