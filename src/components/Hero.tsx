import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH APPLICATION DEVELOPMENT
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Coding.
        </h1>
        <div className="flex justify-center items-baseline">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
           Practice coding for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-gray-500 md:pl-4"
            strings={["jobs", "money", "fun"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Improve your skills every day and you'll have a great career ahead.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
