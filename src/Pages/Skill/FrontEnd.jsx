import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GiDaisy } from "react-icons/gi";
import { WiThermometerInternal } from "react-icons/wi";


const FrontEnd = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-[#E44D26]">
          <IoLogoHtml5 />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">HTML5</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-[#0277BD]">
          <IoLogoCss3 />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">CSS</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-[#FFD600]">
          <IoLogoHtml5 />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">JAVASCRIPT</h2>
        </div>
      </div>

      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-[#00D8FF]">
          <RiReactjsLine />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">REACT JS</h2>
        </div>
      </div>

      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-blue-400">
          <SiTailwindcss />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">TAILWIND CSS</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-white">
          <TbBrandNextjs />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">NEXT JS</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-green-600">
          <GiDaisy />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">DAISY UL</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-blue-600">
          <WiThermometerInternal />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">METERIAL UI</h2>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
