import Footer from "./Layout/Footer";

const Layout = (props) => {
  return (
    <>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
