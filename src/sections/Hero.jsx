import React from 'react'
import PROFILE_PIC from '../assets/images/hero.png';
import ICON_1 from "../assets/images/icon-1.png";
import ICON_2 from "../assets/images/icon-2.png";
import ICON_3 from "../assets/images/icon-4.png";
import ICON_4 from "../assets/images/icon-3.png";
import { STATS } from '../utils/data';
import StatInfoCard  from '../components/StatInfoCard';


const Hero = () => {

  const goToprofile = () => {
    window.location.href = "https://www.linkedin.com/in/jatin-pidugu-857b82218";
  };

  const goToresume = () => {
    window.location.href = "https://drive.google.com/file/d/1l3vOU7rebaSYg589eb8YJe9v4ufZsFTr/view?usp=sharing";
  };

  return (
    <section id='hero' className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">👋 Hi, I am Jatin Pidugu</h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-[#17a2c2eb] bg-clip-text text-transparent">Data Analyst and Developer </h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-5 justify-normal">
            Graduate in B.Tech in computer Science from  
            <b> Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore</b>. 
            I have Skills in <b>Data Science</b> and <b>Analysis</b>, <b>Deep leaning</b>, 
            <b>Web development</b> and many other <b>industry specific skills</b>. 
          </p>
          <p className="text-black text-xl md:gap-10"><b>Check out my Portfolio</b></p>
          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button onClick={goToprofile} className="flex-1 md:flex-none action-btn-outline btn-scale-anim">View My LinkedIn</button>
            <button onClick={goToresume} className="flex-1 md:flex-none action-btn btn-scale-anim">View My Resume</button>
        </div>
      </div>
      <div  className="w-[300px] md:w-[380px] h-[350px] md:h-[428px] bg-[#d6e67c] rounded-3xl relative order-1 lg:order-2">
        <img src={PROFILE_PIC} alt="Profile Picture" className="profile-pic" />
        <img
          src={ICON_1}
          alt="Icon 1"
          className="icon-img -left-10 bottom-10 rotate-[1.75deg]"
          />

        <img
          src={ICON_2}
          alt="Icon 2"
          className="icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg]"
          />

        <img
          src={ICON_3}
          alt="Icon 3"
          className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]"
          />

        <img
          src={ICON_4}
          alt="Icon 4"
          className="icon-img left-[200px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg]"
          />
      </div>
      </div>
      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) =>(
          <StatInfoCard key = {item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section >
  );
};

export default Hero;