const Causes = () => {
    const causes = [
      { id: 1, title: "Food for the Hungry", img: "https://via.placeholder.com/400", raised: "$8,500", goal: "$10,000" },
      { id: 2, title: "Education for Children", img: "https://via.placeholder.com/400", raised: "$6,200", goal: "$8,000" },
      { id: 3, title: "Clean Water Access", img: "https://via.placeholder.com/400", raised: "$9,000", goal: "$12,000" },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Our Causes</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {causes.map((cause) => (
            <div key={cause.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={cause.img} alt={cause.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{cause.title}</h3>
                <p className="text-gray-600">Raised: {cause.raised} / Goal: {cause.goal}</p>
                <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-full">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Causes;
  