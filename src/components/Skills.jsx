import React from 'react'; 
import { TbBrandPython } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiFlask } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { TbBrandFirebase } from "react-icons/tb";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiApachehadoop } from "react-icons/si";
import { SiApachehive } from "react-icons/si";







const Skills = ({skill}) => {
    const icon = {
        python : <TbBrandPython/>,
        java : <FaJava/>,
        tensorflow: <SiTensorflow/>,
        sklearn:<SiScikitlearn/>,
        hadoop:<SiApachehadoop/>,
        hive:<SiApachehive/>,
        javascript : <SiJavascript/>,
        react: <FaReact/>,
        node: <FaNode/>,
        flask: <SiFlask/>,
        django: <DiDjango/>,
        mysql: <SiMysql/>,
        postgresql: <BiLogoPostgresql/>,
        mongodb: <SiMongodb/>,
        aws: <FaAws/>,
        git: <FaGitAlt/>,
        github: <FaGithub/>,
        postman: <SiPostman/>,
        docker: <IoLogoDocker/>,
        firebase: <TbBrandFirebase/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills;