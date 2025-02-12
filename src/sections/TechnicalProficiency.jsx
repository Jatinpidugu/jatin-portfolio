import React from 'react'
import { useState } from 'react';
import { SKILL_TABS } from '../utils/data';
import { SKILLS } from '../utils/data';
import  Tabs  from '../components/Tabs'
import SkillCard from '../components/SkillCard'; 
import { motion } from 'framer-motion';

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");


  const handleTabValueChange = (value) => {
    if (value =="all"){
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }
    const updatedList =SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList);

    setActiveTab(value);
  }

  return (
    <section id="skills" className="bg-[#eef6eb] mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">
            Technical Proficiency
          </h4> 
          <p className="text-xl text-center mt-4 leading-6">
          Empowering innovation through a fresh perspective, mastering React, Machine Learning, and to build dynamic applications.
           </p>
        </div>
        <Tabs
          tabList = {SKILL_TABS}
          activeTab = {activeTab}
          onChange = {handleTabValueChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
        {tabData.map((skill, index)=> (
          <motion.div key = {skill.id} 
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{ duration:0.4, delay: index*0.1}}
          >
            <SkillCard
              icons={<skill.icon className="w-10 h-6 text-primary"/>}
              skillName = {skill.skil}
              description = {skill.description}
              progress = {skill.progress}
              />
              </motion.div>
        ))}
        </div>
        </div>
    </section>
  )
}

export default TechnicalProficiency;