import './About.css'
import {useState} from 'react'

import EcCouncil from '/src/assets/Ecouncil.jpg'
import Cisco from '/src/assets/Cisco.png'
import Comptia from '/src/assets/Comptia.png'
import IBM from '/src/assets/IBM.jpeg'
import Mlearn from '/src/assets/Mlearn.png'
import AWS from '/src/assets/aws.png'

import Ada from '/src/assets/Ada.jpeg'
import Nasty from '/src/assets/Nasty.jpeg'
import Osama from '/src/assets/Osama.jpeg'
import Niggah from '/src/assets/Niggah.jpeg'
function About() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleDiv = () =>{
        setIsVisible(!isVisible);
    };

  return (
    <>
    <div className="container">

        <h2 className='title'>About</h2>

        <p className='about-text'> Tracom Academy is an initiative of Tracom Services Limited, a leading FinTech company. We are committed to shaping the next generation of developers and IT professionals by providing comprehensive, industry-aligned training in key technology areas. Our programs are designed for aspiring tech enthusiasts who want to master the skills required in today’s digital world. </p>
        <div id='more-text' style={{display: isVisible? 'block' : 'none'}}>
            <p className='about-text'>
            At Tracom Academy, we offer hands-on courses in:
    
            Frontend and Backend Web Development: Learn how to create dynamic and responsive websites using modern tools and frameworks. 
            <br />
            Mobile Development: Gain the skills to build powerful, user-friendly mobile applications for both Android and iOS.
            <br />
            Database Management: Understand the intricacies of database design, management, and optimization for real-world applications.
            <br />
            POS (Point of Sale) System Development: Master the development of POS systems, from designing user-friendly interfaces to managing transactions and security.
            <br />
            With a focus on practical experience and expert guidance, Tracom Academy ensures that our students are not only prepared to meet industry demands but also to excel in their careers as developers and IT professionals.
            </p>
            <br />
            <p className='about-text'>
            Join us today and start building your future with the knowledge and skills that will set you apart in the tech world.
            </p>
        </div>
        <button className='read-more' onClick={toggleDiv}>
            {isVisible ? "Read Less" : "Read More"}
        </button>

        <div className="associates">
          <h2 className="associates-title">in association with...</h2>
          <ul className="associates-list scroll-bar">
            <li className="assoaciate">
              <img src={EcCouncil} alt="" className='associate-img eccouncil' />
            </li>
            <li className="assoaciate">
            <img src={AWS} alt="" className='associate-img aws'/>
            </li>
            <li className="assoaciate">
            <img src={Cisco} alt="" className='associate-img cisco'/>
            </li>
            <li className="assoaciate">
            <img src={Comptia} alt="" className='associate-img comptia'/>
            </li>
            <li className="assoaciate">
            <img src={IBM} alt="" className='associate-img ibm'/>
            </li>
            <li className="assoaciate">
            <img src={Mlearn} alt="" className='associate-img mlearn'/>
            </li>
          </ul>
        </div>

        <div className="testimonials ">
          <h2 className="testimonials-title">Testimonials</h2>

          <ul className="testimonials-list scroll-bar">

            <li className="testimony">
              <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src={Ada} alt="" />
              </figure>
              
              <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lee</h4>
              
              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam explicabo quo deleniti quaerat dicta unde? Temporibus, at dolorem! Quia odio tenetur eveniet iusto perferendis. Odit aliquid quos, natus ad, ex numquam qui vitae saepe suscipit ipsam nam nobis cum culpa.
                </p>
              </div>
              </div>
            </li>

            <li className="testimony">
              <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src={Niggah} alt="" />
              </figure>
              
              <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lee</h4>
              
              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam explicabo quo deleniti quaerat dicta unde? Temporibus, at dolorem! Quia odio tenetur eveniet iusto perferendis. Odit aliquid quos, natus ad, ex numquam qui vitae saepe suscipit ipsam nam nobis cum culpa.
                </p>
              </div>
              </div>
            </li>

            <li className="testimony">
              <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src={Nasty} alt="" />
              </figure>
              
              <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lee</h4>
              
              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam explicabo quo deleniti quaerat dicta unde? Temporibus, at dolorem! Quia odio tenetur eveniet iusto perferendis. Odit aliquid quos, natus ad, ex numquam qui vitae saepe suscipit ipsam nam nobis cum culpa.
                </p>
              </div>
              </div>
            </li>

            <li className="testimony">
              <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src={Osama} alt="" />
              </figure>
              
              <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lee</h4>
              
              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam explicabo quo deleniti quaerat dicta unde? Temporibus, at dolorem! Quia odio tenetur eveniet iusto perferendis. Odit aliquid quos, natus ad, ex numquam qui vitae saepe suscipit ipsam nam nobis cum culpa.
                </p>
              </div>
              </div>
            </li>


          </ul>
        </div>
   </div>
    </>
   
  )
}

export default About