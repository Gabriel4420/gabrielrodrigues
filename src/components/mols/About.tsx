import React from "react";

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
            <p>Sobre</p>
            <h2>Quem eu sou</h2>
            <p></p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
