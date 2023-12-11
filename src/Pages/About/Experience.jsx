
const Experience = () => {
    return (
      <div className="space-y-3">
        <p className="text-xs text-gray-400 text-center mb-7">
          I am proficient in developing full-stack web applications using React,
          Firebase, MongoDB, Node.js, and styling with Tailwind CSS, along with
          expertise in HTML, CSS, and JavaScript.
        </p>
        <div className="relative">
          <progress
            className="progress progress-info w-full"
            value="90"
            max="100"
            style={{ height: "20px", borderRadius: "5px" }}
          ></progress>
          <span className="text-xs text-black font-bold absolute inset-0 flex items-center justify-center">
            HTML : 90%
          </span>
        </div>
        <div className="relative">
          <progress
            className="progress progress-info w-full"
            value="87"
            max="100"
            style={{ height: "20px", borderRadius: "5px" }}
          ></progress>
          <span className="text-xs text-black font-bold absolute inset-0 flex items-center justify-center">
            CSS : 87%
          </span>
        </div>
        <div className="relative">
          <progress
            className="progress progress-info w-full"
            value="93"
            max="100"
            style={{ height: "20px", borderRadius: "5px" }}
          ></progress>
          <span className="text-xs text-black font-bold absolute inset-0 flex items-center justify-center">
            JAVASCRIPT : 93%
          </span>
        </div>
        <div className="relative">
          <progress
            className="progress progress-info w-full"
            value="85"
            max="100"
            style={{ height: "20px", borderRadius: "5px" }}
          ></progress>
          <span className="text-xs text-black font-bold absolute inset-0 flex items-center justify-center">
            REACT : 85%
          </span>
        </div>
        <div className="relative">
          <progress
            className="progress progress-info w-full"
            value="70"
            max="100"
            style={{ height: "20px", borderRadius: "5px" }}
          ></progress>
          <span className="text-xs text-black font-bold absolute inset-0 flex items-center justify-center">
            NODE JS : 70%
          </span>
        </div>
        <div className="relative">
          <progress
            className="progress progress-info w-full"
            value="95"
            max="100"
            style={{ height: "20px", borderRadius: "5px" }}
          ></progress>
          <span className="text-xs text-black font-bold absolute inset-0 flex items-center justify-center">
            MONGODB
          </span>
        </div>
      </div>
    );
};

export default Experience;