import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './componentsStyles/Work.css';
import { useTheme } from '../context/ThemeContext';
import { Git,GitWhite,World } from "../assets/icons";


const works = [
    {
        title: "Project Management App",
        description: "This project involves project management for a construction company. It includes a supervisor and a manager who can track the overall project and update daily activities.",
        liveDemo: "",
        github: "https://github.com/example1",
        type: "Mobile",
        poster: require('../assets/images/pm.jpg'),
        technology: "React Native",
    },
    {
        title: "Attendance Tracker App",
        description: "An attendance tracker for a construction company. The site supervisor can manage employees under him and mark attendance, including options such as sick, casual, and leave without pay.",
        liveDemo: "",
        github: "https://github.com/example2",
        type: "Mobile",
        poster: require('../assets/images/attandance.jpg'), 
        technology: "React Native",
    },
    {
        title: "Annual Maintenance Tracker",
        description: "This application sends an annual hardware maintenance reminder for an organization. The system admin is alerted to schedule maintenance of hardware items.",
        liveDemo: "",
        github: "https://github.com/example3",
        type: "Mobile",
        poster: require('../assets/images/amc.jpg'),
        technology: "React Native",
    },
    {
        title: "Personal Portfolio",
        description: "My portfolio application, demonstrating responsive web design using modern web development techniques.",
        liveDemo: "https://example.com/live4",
        github: "https://github.com/example4",
        type: "Web",
        poster: require('../assets/images/potfoloi.jpg'),
        technology: "React, HTML, CSS",
    },
    {
        title: "E-commerce Platform",
        description: "A technical assignment given by PEMS Digital. Implemented homepage and detail page with JSON response, infinite scroll, and pagination.",
        liveDemo: "",
        github: "https://github.com/example5",
        type: "Mobile",
        poster: require('../assets/images/shopping.jpg'),
        technology: "React Native",
    },
    {
        title: "Introdo Timer Webpage",
        description: "Introdo is a static webpage with a simple, efficient timer feature designed to help users manage time effectively with automatic tab switching based on intervals.",
        liveDemo: "",
        github: "https://github.com/example6",
        type: "Web",
        poster: require('../assets/images/time.jpg'),
        technology: "React Native",
    },
    {
        title: "Mobile Login Page Design",
        description: "User-friendly login page design for mobile applications.",
        liveDemo: "",
        github: "https://github.com/example7",
        type: "Mobile",
        poster: require('../assets/images/login.jpg'),
        technology: "React Native",
    },
    {
        title: "Mobile Shopping Cart Design",
        description: "User-friendly shopping cart design for a mobile application.",
        liveDemo: "",
        github: "https://github.com/example8",
        type: "Mobile",
        poster: require('../assets/images/cart.jpg'),
        technology: "React Native",
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Works = () => {
    const { theme } = useTheme();

    return (
        <div className="works-container">
            <h2 className="works-heading">Showcase of My Projects</h2>
            <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                autoPlaySpeed={2000} 
            >
                {works.map((work, index) => (
                    <div key={index} className="work-item">
                        <div className="work-image-container">
                            <img
                                src={work.poster}
                                className="work-image"
                                alt={work.title}
                            />
                            <span className={`work-badge ${work.type === "Web" ? "badge-web" : "badge-mobile"}`}>
                                {work.type}
                            </span>
                        </div>
                        <h3 className="work-title">{work.title}</h3>
                        <p className="work-technology">Technology: {work.technology}</p>
                        <p className="work-description">{work.description}</p>
                        <div className="button-container">
                            {work.liveDemo && (
                                <a href={work.liveDemo} target="_blank" rel="noopener noreferrer" className="work-button">
                                    {theme === "dark" ? (
                                    <World className="git-icon" />
                                ) : (
                                    <World className="git-icon" />
                                )}
                                    Live Demo
                                </a>
                            )}
                            <a href={work.github} target="_blank" rel="noopener noreferrer" className="work-button">
                                {theme === "dark" ? (
                                    <Git className="git-icon" />
                                ) : (
                                    <Git className="git-icon" />
                                )}
                                Code
                            </a>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Works;
