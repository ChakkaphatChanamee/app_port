import React from "react";
import { motion } from "framer-motion";
import "./App.css";

import profile from "./img/profile.png";
import CoCow1 from "./img/CoCow1.png";
import CoCow2 from "./img/CoCow2.png";
import CoCow3 from "./img/CoCow3.png";
import profile1 from "./img/profile1.jpg";
import logosmh from "./img/logosmh.jpg";
import smh5 from "./img/smh5.jpg";
import sku1 from "./img/sku1.png";
import smh2 from "./img/smh2.jpg";
import sku2 from "./img/sku2.png";
import sku3 from "./img/sku3.png";
import fm1 from "./img/fm1.png";
import fm2 from "./img/fm2.png";
import fm3 from "./img/fm3.png";


/* ICONS */

import { FaCode, FaGlobe, FaMicrochip } from "react-icons/fa";
import { 
FaPython,
FaJava,
FaReact,
FaGithub,
FaFacebook,
FaInstagram,
FaLine
} from "react-icons/fa";


function App() {

  const scroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (

<div className="app">

{/* NAVBAR */}

<nav className="navbar">

<div className="nav-container">

<div className="logo">
PORTFOLIO
</div>

<div className="menu">

<span onClick={()=>scroll("skills")}>ทักษะ</span>
<span onClick={()=>scroll("experience")}>ประสบการณ์</span>
<span onClick={()=>scroll("projects")}>ผลงาน/ผลงานส่วนตัว</span>
<span onClick={()=>scroll("about")}>เกี่ยวกับฉัน</span>

</div>

<button
className="contact-btn"
onClick={()=>scroll("contact")}
>
ติดต่อ
</button>

</div>

</nav>


{/* HERO */}

<section className="hero">

<div className="hero-content">

<img src={profile} className="profile" alt="profile"/>

<motion.h1
className="hero-name"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

นาย จักรพรรดิ ชนะมี

</motion.h1>

<div className="title">

<p>
<strong>มหาวิทยาลัย</strong> เทคโนโลยีพระจอมเกล้าพระนครเหนือ
</p>

<p>
<strong>คณะ</strong> วิทยาลัยเทคโนโลยีอุตสาหกรรม
</p>

<p>
<strong>สาขา</strong> เทคโนโลยีอิเล็กทรอนิกส์ แขนง คอมพิวเตอร์
</p>

</div>

</div>

<div className="hero-glow"></div>

</section>


{/* ABOUT */}
{/* ABOUT PROFILE */}

{/* ABOUT PROFILE */}

<section className="about-profile">

<div className="about-profile-container">

<div className="about-profile-img">
<img src={profile1} alt="profile1"/>
</div>

<div className="about-profile-text">

<h2 className="about-title">เกี่ยวกับฉัน</h2>

<p>
สวัสดีครับ ผมชื่อ จักรพรรดิ ชนะมี เป็นนักศึกษาสาขาวิชาเทคโนโลยีอิเล็กทรอนิกส์ แขนง คอมพิวเตอร์ ณ มหาวิทยาลัย เทคโนโลยีพระจอมเกล้าพระนครเหนือ
ผมมีความสนใจในด้านการพัฒนาระบบอัตโนมัติ (Automatic system) และปัญญาประดิษฐ์ (AI) และมีความสนใจในการออกแบบหน้าเว็บและพัฒนาแอปพลิเคชันด้วย React และ Flutter
การเรียนของผมเน้นไปที่การพัฒนาทักษะทางเทคนิคในด้านการเขียนโปรแกรม การทำงานแบบเป็นระบบ และการพัฒนาเว็บแอปพลิเคชัน
ผมมีประสบการณ์ในการทำโปรเจกต์ที่เกี่ยวข้องกับระบบอัตโนมัติด้วยครับ
</p>

</div>

</div>

<section id="skills" className="section">

<h2 className="section-title">ทักษะ</h2>

<div className="skills-container">

  <div className="skill-card">
    <div className="skill-icon">
      <FaCode />
    </div>

    <h3>Programming</h3>

    <p>
      C, Java, HTML, CSS, PHP
    </p>
  </div>


  <div className="skill-card">
    <div className="skill-icon">
      <FaGlobe />
    </div>

    <h3>Web / Backend</h3>

    <p>
      React, Flutter, MongoDB,
      Firebase, Bootstrap, Node.js
    </p>
  </div>


  <div className="skill-card">
    <div className="skill-icon">
      <FaMicrochip />
    </div>

    <h3>Embedded System</h3>

    <p>
      ESP32, Arduino
    </p>
  </div>

</div>

</section>


{/* EXPERIENCE */}

<section id="experience" className="section">

<h2 className="section-title">ประสบการณ์</h2>

<div className="card">

<h3>ฝึกงาน IT Support</h3>
<p>โรงพยาบาลพระนั่งเกล้า</p>

<ul>
<li>พัฒนา website</li>
<li>บำรุงรักษาอุปกรณ์คอมพิวเตอร์</li>
<li>UX/UI Design</li>
</ul>

</div>
</section>


{/* PROJECTS */}

<section id="projects" className="section">

<h2 className="section-title">ผลงานโปรเจกต์</h2>

<div className="about-profile-container">

<div className="about-profile-text">

<h3>SMART MEDICHUB</h3>

<p>
เป็นเครื่องจ่ายยาอัจฉริยะที่พัฒนาขึ้นเพื่อช่วยจัดการการรับประทานยาให้ตรงเวลา โดยใช้ ESP32 เป็นตัวควบคุมหลักของระบบ ผู้ใช้งานสามารถกำหนดเวลารับประทานยาได้ผ่าน เว็บแอปพลิเคชัน และเมื่อถึงเวลาที่กำหนด ระบบจะทำการ แจ้งเตือนและจ่ายยาอัตโนมัติ 
เพื่อลดโอกาสการลืมรับประทานยา เหมาะสำหรับผู้สูงอายุหรือผู้ที่ต้องรับประทานยาตามเวลาอย่างสม่ำเสมอ
</p>

</div>

<div className="project-img">
<img src={logosmh} alt="logosmh"/>
<img src={smh5} alt="smh5"/>
<img src={smh2} alt="smh2"/>

</div>

</div>

</section>


<section id="projects2" className="section">

<h2 className="section-title">ผลงานส่วนตัว</h2>

<div className="about-profile-container">

<div className="about-profile-text">

<h3>CoCowMilk</h3>

<p>
เป็นการพัฒนาแอปพลิเคชันด้วย Flutter โดยแอปพลิเคชันนี้มีฟีเจอร์การสั่งซื้อและจัดการร้านขายนมสดออนไลน์ ผู้ใช้งานสามารถเลือกซื้อสินค้าต่าง ๆ เช่น นมสด ชาเขียว และอื่น ๆ ได้อย่างสะดวกสบายผ่านแอปพลิเคชันนี้
แอปพลิเคชันนี้มีระบบการจัดการคำสั่งซื้อที่ช่วยให้ร้านค้าสามารถติดตามและจัดการคำสั่งซื้อได้อย่างมีประสิทธิภาพ นอกจากนี้ยังมีฟีเจอร์การชำระเงินออนไลน์ที่ช่วยให้ลูกค้าสามารถชำระเงินได้อย่างสะดวกและรวดเร็ว
</p>

</div>

<div className="project-img">
<img src={CoCow1} alt="CoCow1"/>
<img src={CoCow2} alt="CoCow2"/>
<img src={CoCow3} alt="CoCow3"/>
</div>

</div>



</section>

<section id="projects3" className="section">

<div className="about-profile-container">

<div className="about-profile-text">

<h3>sketchUp Pro</h3>

<p>
การออกแบบโมเดล 3 มิติ โดยใช้โปรแกรม SketchUp Pro เพื่อสร้างงานงานออกแบบต่าง ๆ เช่น อาคาร สถานที่ หรือวัตถุต่าง ๆ โดยใช้เครื่องมือและฟีเจอร์ต่าง ๆ ที่มีในโปรแกรมนี้ เพื่อสร้างโมเดลที่มีความละเอียดและสมจริง
</p>

</div>

<div className="project-img sketchup-img">
<img src={sku1} alt="sku1"/>
<img src={sku2} alt="sku2"/>
<img src={sku3} alt="sku3"/>
</div>

</div>

</section>

<section id="projects4" className="section">

<div className="about-profile-container">

<div className="about-profile-text">

<h3>UX/UI Design</h3>

<p>
การออกแบบประสบการณ์ผู้ใช้ (UX) และการออกแบบส่วนติดต่อผู้ใช้ (UI) โดยเน้นการออกแบบที่ตอบสนองความต้องการของผู้ใช้และสร้างความพึงพอใจในการใช้งาน
ผลงานการออกแบบเว็บไซต์และแอปพลิเคชันให้ผู้ใช้งานสามารถใช้งานได้อย่างง่ายดายและมีประสบการณ์ที่ดีในการใช้งาน
</p>

</div>

<div className="project-img sketchup-img">

<img src={fm3} alt="fm3"/>
<img src={fm1} alt="fm1"/>
<img src={fm2} alt="fm2"/>

</div>

</div>

</section>

</section>

<section id="about" className="section">

<h2 className="section-title">CONTACT</h2>

<div className="about-grid">

<div className="about-card">

<div className="about-icon">
<FaFacebook/>
</div>

<h3>FACEBOOK</h3>

<p>
ติดตามกิจกรรม และการเรียนของผมผ่าน Facebook
</p>

<a href="https://www.facebook.com/teamz.chakkapat/" target="_blank" rel="noreferrer">
ดูโปรไฟล์ ↗
</a>

</div>


<div className="about-card">

<div className="about-icon">
<FaInstagram/>
</div>

<h3>INSTAGRAM</h3>

<p>
รวมภาพผลงาน การทำโปรเจกต์ และไลฟ์สไตล์
</p>

<a href="https://www.instagram.com/tcc_teamz/" target="_blank" rel="noreferrer">
ดูโปรไฟล์ ↗
</a>

</div>


<div className="about-card">

<div className="about-icon">
<FaLine/>
</div>

<h3>LINE</h3>

<p>
ติดต่อผมผ่าน LINE
เพื่อพูดคุยเรื่องงานหรือโปรเจกต์
</p>

<a href="https://line.me/ti/p/xd6yD23-vI" target="_blank" rel="noreferrer">
เพิ่มเพื่อน ↗
</a>

</div>


<div className="about-card">

<div className="about-icon">
<FaGithub/>
</div>

<h3>GITHUB</h3>

<p>
รวมโปรเจกต์ และซอร์สโค้ดที่ผมพัฒนา
</p>

<a href="https://github.com/ChakkaphatChanamee" target="_blank" rel="noreferrer">
ดูโปรไฟล์ ↗
</a>

</div>

</div>

</section>


{/* SKILLS */}



{/* CONTACT */}

<section id="contact" className="section">

<h2 className="section-title">ติดต่อ</h2>

<p>📞 084-323-1677</p>
<p>📧 teamzchakkaphat04@gmail.com</p>

</section>


<footer className="footer">
©2026 Chakkaphat Chanamee
</footer>

</div>

  );
}

export default App;