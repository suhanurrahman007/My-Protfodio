import Container from "../../components/Container";
import img from "../../assets/Profile.png"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

    return (
      <Container>
        <Helmet>
          <title>SuHan - Home</title>
        </Helmet>
        <div className="hero min-h-screen bg-[#150F2D]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={img}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div
              // data-aos="fade-down"
              // data-aos-easing="linear"
              // data-aos-duration="1500"
              className="space-y-5 md:w-1/2"
            >
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="text-purple-600"
              >
                Hey there,
              </p>
              <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-5xl font-bold"
              >
                Suhanur Rahman
              </h1>
              <h3
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className="text-blue-600"
              >
                MERN Stack Web Developer
              </h3>
              <p
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className="py-6 text-justify"
              >
                I am Suhanur Rahman. I am a front-end web developer. I have been
                Study in this sector for the past 1+ years. I consider coding
                as the most important thing in my life. I love to tackle complex
                problems.
              </p>
              <div className="space-x-5">
                <Link
                  to={"/"}
                  data-aos="zoom-in"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Hire Me
                </Link>
                <Link
                  to={"/about"}
                  data-aos="zoom-out"
                  className=" text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Home;