import { TbBrandVscode, TbBrandNpm } from "react-icons/tb";
import { IoIosGitMerge } from "react-icons/io";
import { BiLogoNetlify } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";


const Tools = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-blue-800">
          <TbBrandVscode />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">VS CODE</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-red-950">
          <TbBrandNpm />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">NPM</h2>
        </div>
      </div>

      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-[#F03C2E]">
          <IoIosGitMerge />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">GIT</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4">
          <img className="w-16 mb-3" src="/public/vite.svg" alt="" />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">VITE</h2>
        </div>
      </div>

      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-[#3CBFB8]">
          <BiLogoNetlify />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">NETLIFY</h2>
        </div>
      </div>
      <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
        <figure className="mx-auto mb-4 text-7xl text-gray-700">
          <FaGithub />
        </figure>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">GITHUB</h2>
        </div>
      </div>
    </div>
  );
};

export default Tools;
