import { FC } from "react";
import { Footer } from "../../common/Footer/Footer.component";
import { Header } from "../../common/Header/Header.component";
import { Navbar } from "../../common/Navbar/Navbar.component";
import { Mainpage } from "../../pages/MainHomePage/Mainpage.component";

const Homepage: FC = () => {
  return (
    <main>
      <Header></Header>
      <Navbar></Navbar>
      <Mainpage></Mainpage>
      <Footer></Footer>
    </main>
  );
};

export default Homepage;
