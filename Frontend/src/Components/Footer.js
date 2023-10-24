import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "../Footer.css";
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const openGitHub = () => {
        window.open('https://github.com/Akashsharma202', '_blank');
    }
    return (
        <div className="page-container">
        <footer className="bg-dark text-light" style={{display:"flex",columnGap:"20%",justifyContent:"space-around"}}>

            <div className="my-2">
                <button className="btn btn-light" onClick={openGitHub}>
                    <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
                </button>
            </div>
            <div className="">
                <p className="" style={{ wordSpacing: '4px', letterSpacing: '2px' }}>
                    Made with <FontAwesomeIcon icon={faHeart} beat /> by Akash
                </p>
                </div>
            <div className="my-2">
                <button className="btn btn-link text-light" onClick={scrollToTop}>
                    Back to Top
                </button>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
