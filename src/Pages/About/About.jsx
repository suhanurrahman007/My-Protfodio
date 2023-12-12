import Container from "../../components/Container";
import img from "../../assets/Profile.png"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Personal from "./Personal";
import Education from "./Education";
import Hobby from "./Hobby";
import Experience from "./Experience";
import { Helmet } from "react-helmet";

const About = () => {

    return (
      <Container>
        <Helmet>
          <title>SuHan - About</title>
        </Helmet>
        <div className=" lg:flex gap-10">
          <img
            src={img}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="lg:w-1/3 rounded-lg shadow-2xl"
          />
          <div className="w-full lg:w-2/3 bg-[#150F2D] p-5">
            <Tabs>
              <TabList className={"flex gap-5 justify-center mb-8"}>
                <Tab
                  className={
                    "text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
                  }
                >
                  Personal
                </Tab>
                <Tab
                  className={
                    "text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
                  }
                >
                  Education
                </Tab>
                <Tab
                  className={
                    "text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
                  }
                >
                  Experience
                </Tab>
                <Tab
                  className={
                    "text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
                  }
                >
                  Hobby
                </Tab>
              </TabList>

              <TabPanel>
                <Personal></Personal>
              </TabPanel>
              <TabPanel>
                <Education></Education>
              </TabPanel>
              <TabPanel>
                <Experience></Experience>
              </TabPanel>
              <TabPanel>
                <Hobby></Hobby>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Container>
    );
};

export default About;