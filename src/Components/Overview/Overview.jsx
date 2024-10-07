import webdev from '/src/assets/webdev.png'
import './Overview.css'

import html from '/src/assets/HTML5.png'
import css from '/src/assets/css.png'
import js from '/src/assets/js.png'
import ts from '/src/assets/TS.jpeg'
import react from '/src/assets/reactjs.png'
import node from '/src/assets/nodejs.png'
import express from '/src/assets/expressjs.jpeg'
import mysql from '/src/assets/mysql.png'
import mongo from '/src/assets/mongodb.png'
import bootstrap from '/src/assets/bootstrap.png'
import tailwind from '/src/assets/tailwind.png'
import java from '/src/assets/java.png'
import springboot from '/src/assets/springboot.jpeg'
import spring from '/src/assets/spring.jpeg'
import flutter from '/src/assets/flutter.jpeg'
import dart from '/src/assets/dart.jpeg'
import kubernetes from '/src/assets/kubernetes.png'
import docker from '/src/assets/docker.png'

function Services() {
  return (
    <>
    <div className="container">
        <header>
          <h2 className="h2-title">
            Overview
          </h2>
        </header>

        <section className="Programs">
          <h3 className="programs-title">What You Will Learn.</h3>
          <ul className="programs-list">
            <li className="program-item">
              <div className="program-icon-box">
                <img src={webdev} alt="" />
              </div>
              <div className="program-content-box">
                <h4 className="program-item-title">Web Development</h4>
                <p className="program-item-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati ad doloremque velit repellat quidem corporis cumque in nihil doloribus.
                </p>
              </div>
            </li>
            <li className="program-item">
              <div className="program-icon-box">
                <img src={webdev} alt="" />
              </div>
              <div className="program-content-box">
                <h4 className="program-item-title">Web Development</h4>
                <p className="program-item-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati ad doloremque velit repellat quidem corporis cumque in nihil doloribus.
                </p>
              </div>
            </li>
            <li className="program-item">
              <div className="program-icon-box">
                <img src={webdev} alt="" />
              </div>
              <div className="program-content-box">
                <h4 className="program-item-title">Web Development</h4>
                <p className="program-item-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati ad doloremque velit repellat quidem corporis cumque in nihil doloribus.
                </p>
              </div>
            </li>
            <li className="program-item">
              <div className="program-icon-box">
                <img src={webdev} alt="" />
              </div>
              <div className="program-content-box">
                <h4 className="program-item-title">Web Development</h4>
                <p className="program-item-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati ad doloremque velit repellat quidem corporis cumque in nihil doloribus.
                </p>
              </div>
            </li>


          </ul>
        </section>

        <section className="tech">
  <h3 className="tech-title">
    Technologies you&apos;ll interact with
  </h3>
  <ul className="tech-list content-card scroll-bar">
    {[
      { src: html, alt: "HTML" },
      { src: css, alt: "CSS" },
      { src: js, alt: "JavaScript" },
      { src: ts, alt: "TypeScript" },
      { src: react, alt: "React" },
      { src: node, alt: "Node.js" },
      { src: express, alt: "Express.js" },
      { src: mysql, alt: "MySQL" },
      { src: mongo, alt: "MongoDB" },
      { src: bootstrap, alt: "Bootstrap" },
      { src: tailwind, alt: "Tailwind CSS" },
      { src: java, alt: "Java" },
      { src: spring, alt: "Spring" },
      { src: springboot, alt: "Spring Boot" },
      { src: flutter, alt: "Flutter" },
      { src: dart, alt: "Dart" },
      { src: kubernetes, alt: "Kubernetes" },
      { src: docker, alt: "Docker" },
    ].map((tech, index) => (
      <li className="tech-item" key={index}>
        <img src={tech.src} alt={tech.alt} />
      </li>
    ))}
  </ul>
</section>

    </div>
    </>
  )
}

export default Services