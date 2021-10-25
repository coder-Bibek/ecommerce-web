import { FC } from "react";
import { Header } from "../../common/Header/Header.component";
import { Navbar } from "../../common/Navbar/Navbar.component";

const Homepage: FC = () => {
  return (
    <main>
      <Header></Header>
      <Navbar></Navbar>
    </main>
  );
};

export default Homepage;
