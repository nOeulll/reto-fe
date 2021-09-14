import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import DetailsPhoto from './DetailsPhoto';

const photoSize = 76;

function DetailsPhotoHorizontal({photoData, id}) {
  console.log(id);
  const TOTAL_SLIDES = (photoData.length - 1) * photoSize
  const [currentSlide, setCurrentSlide] = useState(id * photoSize);
  const slideRef = useRef(null);
  const nextSlide = () => {
      if (currentSlide >= TOTAL_SLIDES) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + photoSize);
      }
    };
    const prevSlide = () => {
      if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES);
      } else {
        setCurrentSlide(currentSlide - photoSize);
      }
    };

    useEffect(() => {
      slideRef.current.style.transition = "all 0.8s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}em)`;
    }, [currentSlide]);
    
    
  return (
    <Container>
      <PhotoListBlock>
        <div className="main_photo" ref={slideRef}>
          {
            photoData.map(card => {
              const imgUrl = `../../images/${card.name}`;
              return (
                <DetailsPhoto
                  id={card.id}
                  imgUrl={imgUrl}
                  date={card.date}
                  time={card.time}
                  contents={card.contents}
                />
              );
            })
          }
        </div>
      </PhotoListBlock>
      <Button>
        <button className="pre_button" onClick={prevSlide}>
          <LeftBlock><BsCaretLeftFill /></LeftBlock>
        </button>
        <button className="next_button" onClick={nextSlide}>
          <RightBlock><BsCaretRightFill /></RightBlock>
        </button>
      </Button>
    </Container>
  );
}
export default DetailsPhotoHorizontal;

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const PhotoListBlock = styled.div`
  display: flex;
  align-items: center;
  width: 76em;
  margin: 0 5em;
  height: 39.8em;
  overflow: hidden;

  .main_photo {
    display: flex;
    align-items: center;
  }
`;

const Button = styled.div`
  all: unset;
  display: flex;
  position: absolute;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 12px 15px;
  width: 100%;
  top: 19em;
  left: 50%;
  
  border-radius: 10px;

  transform: translate(-50%, -50%);
  
  .pre_button {
    color: #2e4052;
    background-color: rgba(0, 0, 0, 0);

    height: 5em;
    margin-right: 10em;
    line-height: 100%;

  }
  .next_button {
    color: #2e4052;
    background-color: rgba(0, 0, 0, 0);

    height: 5em;
    margin-left: 10em;
    line-height: 100%;

  }
`;

const LeftBlock = styled.div`
 font-size: 3em;
 &:hover {
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      color: #ff7676;
    }
    `;
const RightBlock = styled.div`
 font-size: 3em;
 &:hover {
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      color: #ff7676;
    }
`;
