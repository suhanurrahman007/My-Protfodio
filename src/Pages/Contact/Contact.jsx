import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaMobile,
} from "react-icons/fa";
import Container from "../../components/Container";
import { MdMarkEmailRead } from "react-icons/md";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
      <Container>
        <Helmet>
          <title>SuHan - Contact</title>
        </Helmet>
        <div className="lg:flex gap-10">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="lg:w-2/3"
          >
            <form>
              <div className="space-y-5">
                <div className="form-control">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="input input-bordered bg-[#0D0D21]"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="input input-bordered bg-[#0D0D21]"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered bg-[#0D0D21]"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="input input-bordered bg-[#0D0D21]"
                    required
                  />
                </div>
                <div className="form-control">
                  <textarea
                    name="firstName"
                    placeholder="Message"
                    className="input input-bordered bg-[#0D0D21] h-24"
                    required
                  ></textarea>
                </div>
                <div className="form-control">
                  <input
                    type="submit"
                    value={"Submit Message"}
                    className="text-white font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
                    required
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="lg:w-1/3 bg-[#0D0D21] p-5 rounded-md"
          >
            <h2 className="text-2xl font-bold text-purple-800">
              Contact Me :{" "}
            </h2>
            <p className="text-sm text-justify py-5">
              Dhaka, Savar, Savar Khagan Bazar, Daffodil International
              University
            </p>

            <p className="flex items-center mt-8 text-sm">
              <span className="font-bold mr-2 text-2xl text-blue-700">
                <MdMarkEmailRead></MdMarkEmailRead>{" "}
              </span>{" "}
              suhanur35-448@diu.edu.bd
            </p>
            <p className="flex items-center py-3 text-sm">
              <span className="font-bold mr-2 text-2xl text-green-600">
                <FaPhoneAlt></FaPhoneAlt>{" "}
              </span>{" "}
              +880193841356
            </p>
            <p className="flex items-center text-sm">
              <span className="font-bold mr-2 text-2xl text-purple-800">
                <FaMobile></FaMobile>{" "}
              </span>{" "}
              +8801824139665
            </p>

            <div className="flex space-x-7 pt-10">
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
        </div>
      </Container>
    );
};

export default Contact;