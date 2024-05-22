import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Paragraph from "./component/Paragraph";
import Rating from "./component/Rating";
import Button from "./component/Button";
import SectionPage from "./component/SectionPage";
import CardImage from "./component/CardImage";
import Plugins from "./component/Plugins";
import Footer from "./component/Footer";
import GsapAnimation from "./GsapAnimation";



const App = () => {
  return (
    <>
      <GsapAnimation>
        
          <Header />
          <Main />
          <Paragraph />
          <Rating />
          <Button />
          <SectionPage />
          <CardImage />
          <Plugins />
          <Footer />
        </GsapAnimation>
    </>
  );
};

export default App;
