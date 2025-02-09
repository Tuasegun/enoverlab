import React from 'react'
import Cta from '../components/Cta';
import List from '../components/List';
import styled from "styled-components";
import Footer from '../components/Footer';
import Header from '../components/Header';
import PricingCard from '../components/PricingCard'
import VideoSlider from '../components/VideoSlider';
import triangle from '../assets/img/triangle.svg'
import triangleMobile from "../assets/img/triangleMobile.png"
import analyticsLogo from '../assets/img/logos/analytics-logo.png'
import figmaLogo from '../assets/img/logos/Figma-logo.png'
import hotjar from '../assets/img/logos/hotjar.svg'
import jiraLogo from '../assets/img/logos/jira.png'
import trelloLogo from '../assets/img/logos/trello-logo.png'
import productPlan from '../assets/img/logos/productplan-logo.svg'

import TestimVid from '../components/TestimVid';
import Timer from '../components/Timer';


const basic = [
    " Product Management Fundamentals",
    "Customer Journey Map; to learn more about customers, connect, understand & deliver better value to them",
    "UX design: designing experiences beyond the product",
    "Market Leading Strategy",
    "Metrics for product success",
    "Building platform products ",
    "Understanding network effects",
    "Prioritization ",
    "Product-Led Growth",
    "Product Analytics",
    "Innovation for Product Managers",
    "Stakeholder Management",
    "Team Leadership",
]

const advance = [

    "Introduction to Product Management ",
    "Product Thinking",
    "Conducting User Research",
    "Understanding Product Life Cycle",
    "User Segmentation & Personas",
    "Writing User Stories",
    "Creating Userflows, Prototypes & Wireframes",
    "Agile Product Development",
    "Product Roadmap",
    "Competitive Analysis",
    "Product Metrics",
    "Prioritization frameworks",
    "Product Strategy",
    "Minimum Viable Product",
    "Product Launch; Go - to - market strategy",
    "Tracking & analyzing product data",
    "Certificate of Completion",
    "6 weeks Internship placement",
    ,
]

const blitz = [
    "Learn the most important aspect of product management based on your need",
    "One-on-one training and mentorship",
    "Personalized classes",
    "Access to exclusive product management resources",
    " Work on real-life case study",
    "After training support and guidance"
]


const Pricing = () => {
    window.scrollTo(0, 0);
    return (
        <StyledPricingWrapper>
            <div className="adbox">
                <div className="text-box-1">
                    <h3 className='web-text'>Be ahead of the game  <br />Start 2023 strong <br /> Join the waitlist of the January Cohort <br />
                    </h3>

                    <h3 className='mobile-text'>Be ahead of the game<br />Start 2023 strong<br />  Join the waitlist of the <br /> January Cohort <br />
                        <br />

                        <span></span></h3>
                </div>
                <div className="text-box-2">
                    <img className="triangleWeb" src={triangle} alt="" />
                    <img src={triangleMobile} className="triangleMobile" alt="" />
                </div>
                <div className="text-box-3">
                    <p className='web-text'>25% Early Bird Discount<br />Registration closes December 25, 2022 <br /> <span>Enroll below</span></p>
                    <p className='mobile-text'>25% Early Bird Discount<br />Registration closes December 25, 2022 <br /><span>Enroll below</span></p>
                </div>
            </div>
            <Header />
            <StyledPricing>


                <PricingCard primary
                    title="ADVANCE PROGRAM"
                    weeks="(10 weeks)"
                    price="₦112,500"
                    discount="₦150,000"
                    subtitle="For anyone just starting out to learn the required skills to become a Product Manager"
                    enrolText="Enrol Now"
                >
                    {advance.map((item, index) => (
                        <List key={index} text={item} />
                    ))}

                    <Tools>
                        <h6>Tools you would be learning how to use</h6>
                        <div className="tools-container">
                            <div className="tools-list">
                                <div className="tools">
                                    <img src={analyticsLogo} alt="analytics" />
                                </div>
                                <div className="tools">
                                    <img src={figmaLogo} alt="figma" />
                                </div>
                                <div className="tools">
                                    <img src={hotjar} alt="hotjar" />
                                </div>
                            </div>
                            <div className="tools-list">
                                <div className="tools">
                                    <img src={jiraLogo} alt="jira" />
                                </div>
                                <div className="tools">
                                    <img src={trelloLogo} alt="trello" />
                                </div>
                                <div className="tools">
                                    <img src={productPlan} alt="trello" />
                                </div>

                            </div>
                        </div>
                        {/* <ul>
                            <li>Productplan for creating roadmaps</li>
                            <li>Figma for creating prototypes</li>
                            <li>Trello for prioritization</li>
                            <li>Jira for task management</li>
                            <li>Google Analytics for tracking web-based data</li>
                        </ul> */}
                    </Tools>
                </PricingCard>

                <PricingCard
                    title="LevelUP PROGRAM"
                    price="₦150,000"
                    discount="₦200,000"
                    weeks="(7 weeks)"
                    subtitle="For working Product Managers looking to LevelUp their product management skills"
                    enrolText="Enrol Now"
                >
                    {basic.map((item, index) => (
                        <List key={index} text={item} />
                    ))}
                </PricingCard>

                {/* <PricingCard 
                    title="BLITZ PROGRAM" 
                    price="₦200,000"
                    weeks="(4-6 weeks)"
                    subtitle="For experienced professionals who want personalized product management training"
                    enrolText="Enrol Now"
                >
                    {blitz.map((item, index) => (
                        <List key={index} text={item} />
                    ))}
                </PricingCard> */}
            </StyledPricing>
            <Timer />
            <Cta pricing timer />
            <VideoSlider />
            {/* <TestimVid/> */}
            <Footer />
        </StyledPricingWrapper>
    )
}

export default Pricing

const StyledPricingWrapper = styled.div`
    width: 100%;
    padding: 0rem 0 3rem 0;
    .adbox {
        /* padding: 3.3rem 12rem 4.4rem 5rem; */
        /* min-height: 183px; */
        box-sizing: border-box;
        display: flex;
        width: 100%;
        margin-bottom: 3rem;
        @media(max-width: 768px) {
            flex-direction: column;
            height: 65vh;
            margin-bottom: 0rem;
        }
        .text-box-1{
            background-color: #1DB6BC;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0rem 1.2rem 0rem 10%;
         @media(max-width: 768px) {
            width: 100%;
            height: 25vh;
            padding: 0rem 0.5rem 0rem 0rem;
            justify-content: center;
            display: flex;
            align-items: center;
        }
            .web-text{
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                color: #0E1098;
                font-size: 1.8rem;
                padding-top: .5rem;
                
                @media(max-width: 768px) {
                    font-size: 2.0rem;
                    display: none;
             } 
             .span{
                font-weight: 600;
             }
            }
            .mobile-text{
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                color: #0E1098;
                display: none;
                line-height: 2rem;
                font-size: 1.3rem;
                span{
                    font-weight: 600;
                }
                @media(max-width: 768px) {
                    display: block;
                    text-align: center;
                    
                }   
            }
        } 
        .text-box-2{
          background-color: #1DB6BC;
          height: auto;
          width: auto;
        .triangleWeb{
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media (max-width:768px) {
                display: none;
                /* transform: rotate(90deg); */
            }
        }
        .triangleMobile{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: none;
            @media (max-width:768px) {
                display: block;
                /* display: none; */
            }
        }  
        }
        
        
        .text-box-3{
            background: #0E1098;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 0.9rem;
            @media(max-width: 768px) {
            width: 100%;
            height: 25vh;
            padding: 1rem;
             }
            .web-text{
                font-family: 'Montserrat', 'sans-serif';
                font-size: 1.7rem;
                color: #fff;
                line-height: 2.5rem;
                span{
                    background-color: #1DB6BC;
                    color: #0E1098;
                    padding: 0.2rem;
                    font-weight: 800;
                    line-height: 3rem;
                }
                @media(max-width: 768px) {
                    font-size: 1.5rem;
                   
                    display: none;
             }
            }
            .mobile-text{
                font-family: 'Montserrat', 'sans-serif';
                font-size: 1.3rem;
                color: #fff;
                line-height: 1.8rem;
                display: none;
                text-align: left;
                text-align: center;
                span{
                    background-color: #1DB6BC;
                    color: #0E1098;
                    padding: 0.2rem;
                    font-weight: 800;
                    line-height: 6rem;
                    text-align: center;
                   
                }
                @media(max-width: 768px) {
                        display: block;
                }
            }
        }
    }
`;

const StyledPricing = styled.section`
    width: 100%;
    max-width: 790px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    margin: 0 auto;
    margin-top: 4rem;
    @media (max-width: 774px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 6%;
    }
`

const Tools = styled.div`
    width: 100%;
    .tools-container{
        display: flex;
        column-gap: 3rem;
        justify-content: center;
    }
    h6 {
        font-size: 1rem;
        font-weight: 800;
        font-family: 'nexabold', sans-serif;
        color: #090C9B;
        margin-bottom: .5rem;
    }
    .tools-list {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        .tools{
            display: flex;
            column-gap: .5rem;
            font-size: 0.875rem;
            font-weight: normal;
            width: 5rem;
            height: 5rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
    ul {
        width: 100%;
        margin-left: 1rem;
        li {
            font-size: .75rem;
            color: #090C9B;
            margin-bottom: .5rem;
        }
    }
`