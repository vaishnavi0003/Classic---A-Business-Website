import styled from 'styled-components';
import { useProductContext } from './context/productcontext';

const About = () => {
  const { myName } = useProductContext();
  return (
    <>
      {myName}
    <StyledParagraph className='story'>
        At Classic Furnishings, we're not just about furniture. We're about
        stories. The story of your home, your style, and your comfort. Our journey
        began in a small workshop with a dream of blending elegance with coziness.
        With each piece we craft, we're writing a chapter of your story.
    </StyledParagraph>
    
    <Wrapper>
      <div className='owner-image'>
        <img src="https://i.ibb.co/T4hkjtn/IMG-4584.jpg" alt="Owner" height="350rem" width="1800rem" />
      </div>

      <div>
        <h2>Meet the Visionary Behind It</h2>
        <p>Hi there! I'm Ramchandra Shinde, the entrepreneur behind the Classic Furnishing and Mattresses. I embarked on a journey to
          bring elegance and comfort to your homes. From handpicked fabrics to meticulous
          craftsmanship, every item in our collection is a reflection of my dedication
          to enhancing your living spaces.</p>
      </div>
    </Wrapper>
  </>
  )
};

const StyledParagraph = styled.p`
  text-align: center;
  padding: 6rem;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: #f0f0f0;
  padding: 20px;

  .owner-image {
    
    img {
      flex: 1;
      max-width: 70%;
      margin-left: 15%;
    }
  }

  .owner-intro {
    flex: 2;
    padding: 0 20px;
    
    h2 {
      font-size: 2rem;
      margin-bottom: 10px;
      color: #333;
    }

    p {
      font-size: 1.1rem;
      color: #666;
      line-height: 1.6;
    }
  }
`;

export default About;