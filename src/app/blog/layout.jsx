import Home from "../page";
// import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Home />
      <main>{children}</main>
    </>
  );
}
