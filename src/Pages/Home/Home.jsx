import Container from "../../components/Container";
import img from "../../assets/Profile.png"

const Home = () => {
    return (
      <Container>
        <div className="hero min-h-screen bg-[#150F2D]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="space-y-5 w-1/2">
              <h1 className="text-5xl font-bold">Hello......!</h1>
              <h3>Front-End Web Developer</h3>
              <p className="py-6 text-justify">
                I am Suhanur Rahman. I am a front-end web developer. I have been
                working in this sector for the past 1+ years. I consider coding
                as the most important thing in my life. I love to tackle complex
                problems.
              </p>
              <div className="space-x-5">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
                <button className=" text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Home;