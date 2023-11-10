import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <Wrapper>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready to get started?</h3>
                            <h3>Talk to us today</h3>
                        </div>
                        <div>
                            <Button className="btn hireme-btn">
                                <NavLink to="./contact">Get Started</NavLink>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Main Footer */}
                <footer>
                    <div className="container grid grid-four-column">
                        <div className="footer-about">
                            <h3><b>Classic Furnishing and Matressses</b></h3>
                            <h3>Where elegance meets comfort🤍</h3>
                        </div>

                        <div className="footer-subscribe">
                            <h3><b>Subscribe to get important updates</b></h3>
                            <form action="#">
                                <input type="email" placeholder="Your Email" />
                                <input type="submit" value="subscribe" onClick={() => alert("Successfully subscribed to the newsletter!")}/>
                            </form>
                        </div>

                        <div className="footer-social">
                            <h3><b>Follow Us</b></h3>
                            <div className="footer-social--icons">
                                <div>
                                    <FaDiscord className="icons" />
                                </div>

                                <div>
                                    <FaInstagram className="icons" />
                                </div>

                                <div>
                                    <a
                                        href=""
                                        target="_blank">
                                        <FaYoutube className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h3><b>Call Us</b></h3>
                            {/*<a href="tel:9833956488">+91 9833956488</a>*/}
                            <h3>+91 9833956488</h3>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="footer-bottom--section">
                        <hr />
                        <div class="pages">
                            <a>Conditions of Use | </a>
                            <a>Privacy Notice | </a>
                            <a>Your Ads Privacy Choices </a>
                        </div>
                        <div class="copyright">
                            <b>@{new Date().getFullYear()} Classic. All Rights Reserved</b>
                        </div>
                    </div>
                </footer>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    .iSIFGq {
        margin: 0;
    }

    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        transform: translateY(50%);

        .grid div:last-child {
            justify-self: end;
            align-self: center;
        }
    }

    footer {
        padding: 14rem 0 9rem 0;
        background-color: ${({ theme }) => theme.colors.footer_bg};
        h3 {
            color: ${({ theme }) => theme.colors.hr};
            margin-bottom: 2.4rem;
            font-size: 1.5rem;
        }
        p {
            color: ${({ theme }) => theme.colors.white};
        }
        .footer-social--icons {
            display: flex;
            gap: 2rem;

            div {
                padding: 1rem;
                border-radius: 50%;
                color: #fff;
                border: 2px solid ${({ theme }) => theme.colors.white};

                .icons {
                    color: ${({ theme }) => theme.colors.white};
                    color: #fff;
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }
    }

    .footer-bottom--section {
        padding-top: 9rem;

        /*
        hr {
            margin-bottom: 2rem;
            color: ${({ theme }) => theme.colors.hr};
            height: 0.1px;
        }

        div p {
            color: #fff;
            font-size: 1.5rem;
            text-align: center;
            margin-left: 50rem;
            
        }
        */
        color: white;
        height: 80px;
        font-size: 1.5rem;
        text-align: center;
    }
    .pages {
        padding-top: 25px;
        font-size: 1.5rem;
    }

    .copyright {
        padding-top: 5px;
        font-size: 1.5rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .contact-short {
            max-width: 80vw;
            margin: 4.8rem auto;
            transform: translateY(0%);
            text-align: center;

            .grid div:last-child {
                justify-self: center;
            }
        }

        footer {
            padding: 9rem 0 9rem 0;
        }

        .footer-bottom--section {
            padding-top:4.8rem;
        }
    }
`;

export default Footer;