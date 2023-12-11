import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Container from "../../components/Container";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Tools from "./Tools";
import Learning from "./Learning";

const Skill = () => {
  return (
    <Container>
      <div>
        <Tabs>
          <TabList className={"flex gap-5 justify-center mb-8"}>
            <Tab
              className={
                "text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
              }
            >
              Front-End
            </Tab>
            <Tab
              className={
                "text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
              }
            >
              Back-End
            </Tab>
            <Tab
              className={
                "text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
              }
            >
              Tools
            </Tab>
            <Tab
              className={
                "text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
              }
            >
              Learning
            </Tab>
          </TabList>

          <TabPanel>
            <FrontEnd></FrontEnd>
          </TabPanel>
          <TabPanel>
            <BackEnd></BackEnd>
          </TabPanel>
          <TabPanel>
            <Tools></Tools>
          </TabPanel>
          <TabPanel>
            <Learning></Learning>
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
};

export default Skill;
