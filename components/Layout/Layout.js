import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar></NavBar>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
