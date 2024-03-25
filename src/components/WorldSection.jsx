export default function WorldSection() {
  return (
    <div
      className="flex flex-col md:flex-row w-full bg-cover bg-center h-[32rem]"
      style={{ backgroundImage: "url('/images/world_map.jpg')" }}
    >
      <div className="w-full md:w-2/3 bg-black bg-opacity-90 px-8 h-full flex flex-col items-center justify-center">
        <h1 className=" relative text-2xl md:text-3xl font-semibold text-white p-4">
          Our solution cut across 100+ countries
        </h1>
        <p className="text-md md:text-xl text-white p-4">
          elevate your career with SkailleUp, the edtech startup revolutionizing
          learning through a 95% focus on hands-on projects. Our platform began
          with learners spanning eight diverse countries, and we&#39;re
          continuously expanding our global reach with over 80 million users and
          rising demand for talent and skills in the market, SkailleUp boasts a
          90% satisfaction rate and successful company placements. Join us and
          unlock a world of opportunities for your education and career growth.
        </p>
      </div>
      <div className="w-full md:w-1/3 bg-transparent"></div>
    </div>
  );
}
