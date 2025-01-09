
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";
import { useRef } from 'react'


const WorkExperience = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 769,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
      };

      const slideRight = () => {
        sliderRef.current.slickNext();

      };
      const slideLeft = () => {
        sliderRef.current.slickPrev();
        };
  return (
    <section className='experience-container'>
        <h5>Work Experience</h5>
        <div className="experience-content">
            <div className="arrow-right"  onClick={slideRight}>
                <span className="arrow-symbol">{">"}</span>
            </div>
            <div className="arrow-left" onClick={slideLeft}>
            <span className="arrow-symbol">{"<"}</span>
            </div>
            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default WorkExperience