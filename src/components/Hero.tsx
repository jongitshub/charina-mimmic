const Hero = () => {
    return (
      <section className="relative w-full h-[600px] bg-gray-200 flex items-center justify-center">
        <img
          src="https://via.placeholder.com/1500x600"
          alt="Hero Banner"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold">Helping Hands for a Better Future</h1>
          <p className="mt-4 text-lg">Your support changes lives. Donate today.</p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg">
            Donate Now
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  