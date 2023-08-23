import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="Laptop Image"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">OUR CODING PLAN</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            A Six Month Plan to Improve Coding Skills
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse
            reprehenderit rem obcaecati maxime incidunt. Facere et voluptates,
            voluptate, officia asperiores eligendi modi laboriosam soluta dolor
            repellat veniam blanditiis accusamus!
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
