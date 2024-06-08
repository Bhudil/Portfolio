import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const ProjectSlider = ({ projects }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
    return (
        <>
            <div className="w-full overflow-hidden">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.img
                            whileInView={{opacity:1,y:0}}
                            initial={{opacity:0,y:-100}}
                            transition={{duration:1}}
                            src={project.image} alt={project.title} className="mb-6 rounded" />
                        <motion.div
                        whileInView={{opacity:1,y:0}}
                        initial={{opacity:0,y:-100}}
                        transition={{duration:1}}
                        className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <h6 className="mb-4 text-neutral-400">{project.description}</h6>
                            {project.technologies.map((tech,index)=>(
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </Slider>
        </div>
        </>
    )
}
export default ProjectSlider