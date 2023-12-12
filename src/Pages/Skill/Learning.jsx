import { TbBrandNextjs } from "react-icons/tb";
import { WiThermometerInternal } from "react-icons/wi";

const Learning = () => {
    return (
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5"
      >
        <div className="card bg-[#0D0D21] shadow-xl p-6 rounded-md">
          <figure className="mx-auto mb-4 text-7xl text-white">
            <TbBrandNextjs />
          </figure>
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">NEXT JS</h2>
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

export default Learning;