import React, { useEffect, useRef } from 'react';
import './AboutMe.scss';

import breadIcon from '../../assets/icons/Bread--icon.svg';
import profilePicMobile from '../../assets/images/Headshot_casual--mobile.png';
import profilePicDesktop from '../../assets/images//Headshot_casual--desktop.png';
import aboutMeIconAnim from '../../assets/animated icons/aboutme-animated-icon.gif';
import aboutMeIconStatic from '../../assets/animated icons/aboutme-icon.svg';

import SectionHeader from '../SectionHeader/SectionHeader';


function AboutMe() {
    const animatedTextRef = useRef(null);
    const listItemsRef = useRef([]);

    const handleReplaceSrc = () => {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const iconElement = document.querySelector('.aboutme__header--icon');
            iconElement.setAttribute('src', aboutMeIconStatic);
        }
    };


    useEffect(() => {
        handleReplaceSrc();
    }, []);

    useEffect(() => {
        const animatedText = animatedTextRef.current;
        const listItems = listItemsRef.current;

        const observerUnderline = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animatedText.classList.add('animation--underline');
                } else {
                    animatedText.classList.remove('animation--underline');
                }
            });
        });

        observerUnderline.observe(animatedText);

        const observerFadeIn = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.remove('fade-in');
                }
            });
        });

        listItems.forEach((item) => observerFadeIn.observe(item));

        return () => {
            observerUnderline.unobserve(animatedText);
            listItems.forEach((item) => observerFadeIn.unobserve(item));
        };
    }, []);

    return (
        <>
            <section id="aboutme" className="aboutme">
                <div className="aboutme__sec">
                    <SectionHeader title={'Who'} text={'Brenda Gonzalez'} />
                </div>

                <article className="aboutme__cont">
                    <div className="aboutme__body">
                        <div className="aboutme__header">
                            <div className="aboutme__header--title">Who</div>
                            <div className="aboutme__header--info">
                                <img className="aboutme__header--icon" src={aboutMeIconAnim} alt="about me icon" />
                                <h3 ref={animatedTextRef} className="aboutme__header--text">
                                    Brenda Gonzalez
                                </h3>
                            </div>
                        </div>
                        <div className="aboutme__mobile--body">
                            <img className="aboutme__mobile--img" src={breadIcon} alt="Bread Icon" />
                            <img className="aboutme__mobile--profile" src={profilePicMobile} alt="selfie mobile" />
                            <img className="aboutme__mobile--img" src={breadIcon} alt="Bread Icon" />
                        </div>

                        <div className="aboutme__text">
                            <p className="aboutme__desc">
                                A creative Front End Software Engineer blending artistic vision with technical expertise in 3D art, animation, game design, and Commercial Art. I'm Passionate about too many things to list, but some include video games, pet care, and philosophy. Thriving on merging art and tech for immersive digital experiences, pushing boundaries in the ever-evolving tech world.
                            </p>
                            <ul className="aboutme__list">
                                <li ref={(el) => (listItemsRef.current[0] = el)} className="aboutme__list--item">
                                    * Nicknamed the "Queen of Sass/SCSS" by my cohort.
                                </li>
                                <li ref={(el) => (listItemsRef.current[1] = el)} className="aboutme__list--item">

                                    * Currently a Dev in the <a
                                        href="https://www.theshrimpsociety.com/insights/built-in-miami-official-announcement#:~:text=via%20builtmiami.com-,The%20Builders%20Summer,-is%20a%20six"
                                        className="aboutme__list--link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Miami Bulider's Summer</a> collaboration
                                </li>
                                <li ref={(el) => (listItemsRef.current[2] = el)} className="aboutme__list--item">
                                    * Ran a small Web Dev server to help self-learner's mantain accountability.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="aboutme__desktop">
                        <img className="aboutme__desktop--profile" src={profilePicDesktop} alt="my selfie dekstop" />
                    </div>
                </article>
            </section>
        </>
    );
}

export default AboutMe;
