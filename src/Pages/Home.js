import React from "react";
import Navbars from "../Components/GlobalComponent/Navbars/Navbars";
import Top from "../Components/GlobalComponent/Top/Top";
import ExtraSection from "../Components/GlobalComponent/ExtraSection/ExtraSection";
import Footer from "../Components/GlobalComponent/Footer/Footer";

import BannerSection from "../Components/LocalComponent/BannerSection/BannerSection";
import IntroSection from "../Components/LocalComponent/IntroSection/IntroSection";
import EduSection from "../Components/LocalComponent/EduSection/EduSection";
import ProjectSection from "../Components/LocalComponent/ProjectSection/ProjectSection";
import DevstackSection from "../Components/LocalComponent/DevstackSection/DevstackSection";
import SkillSection from "../Components/LocalComponent/SkillSection/SkillSection";

function Home() {
  return (
    <div>
      <Navbars />
      <BannerSection />
      <IntroSection />
      <EduSection />
      <ProjectSection />
      <DevstackSection />
      <SkillSection />
      <ExtraSection />
      <Footer />
      <Top />
    </div>
  );
}

export default Home;
