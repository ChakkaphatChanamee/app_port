import React from "react";
import { motion } from "framer-motion";
import "./App.css";

import profile from "./img/profile.jpg";
import architecture from "./img/architecture.png";
import robot from "./img/robot.png";
import gazebo from "./img/gazebo.jpg";
import hardware from "./img/hardware.jpg";

import {
    SiRos,
    SiRaspberrypi,
    SiFlutter,
    SiOpencv,
    SiCplusplus,
    SiPytorch,
    SiTensorflow,
    SiMongodb,
    SiFirebase,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiEspressif,
    SiArduino,
} from "react-icons/si";

import { FaPython, FaJava, FaReact } from "react-icons/fa";

function App() {

    const scroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (

        <
        div className = "app" >

        <
        nav className = "navbar" >
        <
        div className = "logo" > ⚙ < /div>

        <
        div className = "menu" >
        <
        span onClick = {
            () => scroll("about")
        } > About < /span> <
        span onClick = {
            () => scroll("skills")
        } > Skills < /span> <
        span onClick = {
            () => scroll("experience")
        } > Experience < /span> <
        span onClick = {
            () => scroll("projects")
        } > Projects < /span> <
        span onClick = {
            () => scroll("contact")
        } > Contact < /span> < /
        div > <
        /nav>

        { /* HERO */ }

        <
        section className = "hero" >

        { /* Floating Tech Icons */ }

        <
        div className = "hero-bg-icons" >

        <
        SiRos / >
        <
        FaPython / >
        <
        SiPytorch / >
        <
        SiTensorflow / >
        <
        SiRaspberrypi / >
        <
        SiArduino / >
        <
        FaReact / >

        <
        /div>


        <
        div className = "hero-content" >

        <
        img src = { profile }
        className = "profile"
        alt = "profile" / >

        <
        motion.h1 initial = {
            { opacity: 0, y: 40 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 1 } } >
        Apirak Kaewpachum <
        /motion.h1>

        <
        p className = "title" >
        Autonomous Systems / Software Engineer <
        /p>

        <
        p className = "hero-tags" >
        ROS2• Robotics• AI• Embedded Systems <
        /p>

        <
        /div>

        <
        div className = "wave" > < /div>

        <
        /section>



        { /* ABOUT */ }

        <
        motion.section id = "about"
        className = "section"
        initial = {
            { opacity: 0, y: 80 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: .7 }
        } >

        <
        h2 > About Me < /h2>

        <
        p className = "about" >
        Hi, I 'm Apirak Kaewpachum (Net), an Electronic Computer Technology
        student passionate about robotics and autonomous systems.I enjoy building intelligent robotic platforms using ROS2, AI technologies,
        and embedded systems. <
        /p>

        <
        /motion.section>



        { /* SKILLS */ }

        <
        motion.section id = "skills"
        className = "section"
        initial = {
            { opacity: 0, y: 80 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { duration: .7 }
        } >

        <
        h2 > Technical Skills < /h2>

        <
        div className = "skill-grid" >

        { /* Programming */ }

        <
        div className = "skill-card" >

        <
        h3 > Programming < /h3>

        <
        div className = "skill-item" >
        <
        FaPython size = { 30 }
        /> <
        span > Python < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiCplusplus size = { 30 }
        /> <
        span > C / C++ < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        FaJava size = { 30 }
        /> <
        span > Java < /span> < /
        div >

        <
        /div>


        { /* Robotics */ }

        <
        div className = "skill-card" >

        <
        h3 > Robotics / AI < /h3>

        <
        div className = "skill-item" >
        <
        SiRos size = { 30 }
        /> <
        span > ROS2 Jazzy < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiOpencv size = { 30 }
        /> <
        span > OpenCV < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiPytorch size = { 30 }
        /> <
        span > PyTorch < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiTensorflow size = { 30 }
        /> <
        span > TensorFlow < /span> < /
        div >

        <
        /div>


        { /* Web */ }

        <
        div className = "skill-card" >

        <
        h3 > Web / Backend Tools < /h3>

        <
        div className = "skill-item" >
        <
        FaReact size = { 30 }
        /> <
        span > React < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiFlutter size = { 30 }
        /> <
        span > Flutter < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiMongodb size = { 30 }
        /> <
        span > MongoDB < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiFirebase size = { 30 }
        /> <
        span > Firebase < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiTailwindcss size = { 30 }
        /> <
        span > Tailwind < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiBootstrap size = { 30 }
        /> <
        span > Bootstrap 5 < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiNodedotjs size = { 30 }
        /> <
        span > Node.js < /span> < /
        div >

        <
        /div>


        { /* Embedded */ }

        <
        div className = "skill-card" >

        <
        h3 > Embedded < /h3>

        <
        div className = "skill-item" >
        <
        SiRaspberrypi size = { 30 }
        /> <
        span > Raspberry Pi 5 < /span> < /
        div >

        <
        div className = "skill-item" >
        <
        SiEspressif size = { 30 }
        /> <
        span > ESP32 < /span> < /
        div >

        <
        /div>

        <
        /div>

        <
        /motion.section>



        { /* EXPERIENCE */ }

        <
        section id = "experience"
        className = "section" >

        <
        h2 > Experience < /h2>

        <
        div className = "card" >

        <
        h3 > Fullstack Developer Intern < /h3> <
        p > Magic Software(Thailand) Corp., Ltd < /p>

        <
        ul >
        <
        li > Developed web applications using JavaScript < /li> <
        li > Worked with Web Portal API Software AG < /li> <
        li > Deployed services on Linux servers < /li> < /
        ul >

        <
        /div>

        <
        /section>



        { /* PROJECTS */ }

        <
        section id = "projects"
        className = "section" >

        <
        h2 > Projects < /h2>

        <
        div className = "project-grid" >

        <
        div className = "card" >

        <
        h3 > Self - Driving Autonomous Robot < /h3>

        <
        p >
        Autonomous robot using ROS2 Jazzy on Raspberry Pi 5 with LiDAR SLAM and Navigation2. <
        /p>

        <
        /div>


        <
        div className = "card" >

        <
        h3 > Smart Safe Box(ESP32) < /h3>

        <
        p >
        Embedded safe box system with LINE notification using ESP32. <
        /p>

        <
        /div>

        <
        /div>

        <
        /section>



        { /* ARCHITECTURE */ }

        <
        section className = "section" >

        <
        h2 className = "big-title" >
        Self - Driving System Architecture <
        /h2>

        <
        img src = { architecture }
        alt = "architecture"
        className = "architecture-img" /
        >

        <
        /section>



        { /* ROBOT GALLERY */ }

        <
        section className = "section" >

        <
        h2 > Robot System < /h2>

        <
        div className = "gallery" >

        <
        div className = "gallery-card" >
        <
        img src = { robot }
        alt = "robot" / >
        <
        p > Autonomous Robot Platform < /p> < /
        div >

        <
        div className = "gallery-card" >
        <
        img src = { gazebo }
        alt = "gazebo" / >
        <
        p > Gazebo Simulation < /p> < /
        div >

        <
        div className = "gallery-card" >
        <
        img src = { hardware }
        alt = "hardware" / >
        <
        p > Embedded Hardware < /p> < /
        div >

        <
        /div>

        <
        /section>



        { /* CONTACT */ }

        <
        section id = "contact"
        className = "section" >

        <
        h2 > Contact < /h2>

        <
        p > 📞095 - 604 - 3539 < /p> <
        p > 📧netapirak @gmail.com < /p> <
        p > 💻github.com / shidosaiga < /p>

        <
        /section>



        <
        footer className = "footer" > ©2026 Apirak Kaewpachum <
        /footer>

        <
        /div>
    );
}

export default App;