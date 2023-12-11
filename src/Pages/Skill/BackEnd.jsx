import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const BackEnd = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-green-700">
          <IoLogoNodejs />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">NODE JS</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-[#F57F17]">
          <IoLogoFirebase />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">FIREBASE</h2>
        </div>
      </div>

      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-green-700">
          <BiLogoMongodb />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">MONGODB</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-green-200">
          <SiExpress />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">EXPRESS JS</h2>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
