import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return <Wrapper>
    <div className="container">
        <div className="grid grid-two-column">
            <div className="hero-section-data">
                <p className="intro-data"></p>
                <h1 className="style">Classic Furnishing and Mattresses</h1><br/>
                <h3>Where elegance meets comfort🤍</h3>
                <p>Explore our curated collection of curtains, pillow covers, bed sheets, and mattresses to add a touch of elegance to your space.</p><br/>
                <NavLink to="./products">
                    <Button>Shop Now</Button>
                </NavLink>
            </div>
            {/* Our Homepage image */}
            <div className="hero-section-image">
              <figure>
                <img src="images/M1.png" alt="hero-section-image" className="img-style" />
              </figure>
            </div>
        </div>
    </div>
  </Wrapper>
};

const Wrapper = styled.section`
  padding: 12rem 0;
  
  img {
    min-width: 10rem;
    height: 10rem;
  }
  
  .hero-section-data {
    p{
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      //font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: #553939;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection