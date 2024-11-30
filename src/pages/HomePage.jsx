import React from "react";
import BackgroundChanger from "../components/BackGroundChanger";
import Header from "../components/header/header";
const HomePage = () => {
    return (
        <div className="  bg-gradient-to-l from-blue-600 to-green-600 h-screen w-screen overflow-hidden">
        <Header/>
        <h1 className="text-4xl font-bold text-center text-white italic mx-auto">
          CSEC ASTU Generative AI chatbot
        </h1>
        <BackgroundChanger/>
      </div>
    );
}
export default HomePage;