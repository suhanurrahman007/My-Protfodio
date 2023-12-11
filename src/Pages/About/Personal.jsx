import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Personal = () => {
  return (
    <div className="space-y-7 px-3">
      <p className="text-md text-justify ">
        My full name is Suhanur Rahman. Suhan is my nickname. I live in
        Mymensingh. Currently, I am Study in an Programming hero as a front-end
        web developer. I want to take up coding as my profession and am working
        accordingly. I am still learning and practicing new technologies.
      </p>
      <h2 className="text-xl font-semibold">My social Link : </h2>
      <div className="flex space-x-7">
        <a
          href="#"
          className=" text-3xl text-blue-500 hover:text-blue-700 transform hover:scale-125 transition-transform duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="text-3xl text-blue-500 hover:text-blue-700 transform hover:scale-125 transition-transform duration-300"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="text-3xl text-pink-500 hover:text-pink-700 transform hover:scale-125 transition-transform duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-3xl text-gray-500 hover:text-gray-700 transform hover:scale-125 transition-transform duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="text-3xl text-blue-400 hover:text-blue-600 transform hover:scale-125 transition-transform duration-300"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Personal;
