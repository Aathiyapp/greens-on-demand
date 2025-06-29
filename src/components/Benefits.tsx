
const Benefits = () => {
  const benefits = [
    {
      icon: "🧬",
      title: "AI-Powered Personalization",
      description: "Custom greens formula based on your health profile, goals, and lifestyle preferences."
    },
    {
      icon: "🌱",
      title: "Locally Grown Fresh",
      description: "Harvested fresh in Bengaluru urban farms and delivered within 24 hours of harvest."
    },
    {
      icon: "📦",
      title: "Weekly Delivery",
      description: "Eco-friendly packaging delivered every Sunday. Pause or modify anytime."
    },
    {
      icon: "🎯",
      title: "Results-Driven",
      description: "Track your health journey with our consumption tracker and see real improvements."
    },
    {
      icon: "🔬",
      title: "Nutritionist Approved",
      description: "Every blend is crafted by certified nutritionists and food-tech experts."
    },
    {
      icon: "💚",
      title: "Zero Waste Approach",
      description: "Sustainable farming practices with biodegradable packaging and carbon-neutral delivery."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-gradient">MicroFit Greens</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge health technology with fresh, local produce to deliver nutrition that's perfectly tailored to you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
