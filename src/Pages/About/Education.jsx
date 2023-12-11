const Education = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-3">
        <div className="card card-compact shadow-xl bg-[#0D0D21]">
          <div className="card-body h-36 w-full">
            <h2 className="card-title">JSC</h2>
            <p className="text-sm text-justify text-gray-400">
              I completed my Junior School Certificate in 2014.
            </p>
            <p>
              <span className="font-bold">GPA :</span>{" "}
              <span className="text-blue-600 ml-2">4.96</span>
            </p>
          </div>
        </div>
        <div className="card card-compact shadow-xl bg-[#0D0D21]">
          <div className="card-body h-36 w-full">
            <h2 className="card-title">SSC</h2>
            <p className="text-sm text-justify text-gray-400">
              I completed my Secondary School Certificate in 2016.
            </p>
            <p>
              <span className="font-bold">GPA :</span>{" "}
              <span className="text-blue-600 ml-2">4.89</span>
            </p>
          </div>
        </div>

        <div className="card card-compact shadow-xl bg-[#0D0D21]">
          <div className="card-body h-36 w-full">
            <h2 className="card-title">HSC</h2>
            <p className="text-sm text-justify text-gray-400">
              I completed my Higher Secondary School Certificate in
              2018.
            </p>
            <p>
              <span className="font-bold">GPA :</span>{" "}
              <span className="text-blue-600 ml-2">3.42</span>
            </p>
          </div>
        </div>
        <div className="card card-compact shadow-xl bg-[#0D0D21]">
          <div className="card-body h-36 w-full">
            <h2 className="card-title">Software Engineering</h2>
            <p className="text-sm text-justify text-gray-400">
              I completed my Junior School Certificate in November 2018.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Education;