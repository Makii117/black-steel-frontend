import Navigation from "./Navigation";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
