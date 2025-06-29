
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Pack",
      subtitle: "Try Before You Subscribe",
      price: "₹199",
      period: "3-day trial",
      description: "Perfect for first-time users to experience personalized nutrition",
      features: [
        "3 daily greens pouches",
        "Personalized mix based on quiz",
        "Free delivery in Bengaluru",
        "Health tracking app access",
        "Nutritionist chat support"
      ],
      cta: "Start Trial",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Weekly Plan",
      subtitle: "Most Flexible",
      price: "₹499",
      period: "per week",
      description: "Weekly commitment with full flexibility to pause or modify",
      features: [
        "7 daily greens pouches",
        "AI-optimized nutrition plan",
        "Free weekly delivery",
        "Custom recipe suggestions",
        "Priority customer support",
        "Pause anytime"
      ],
      cta: "Choose Weekly",
      popular: true,
      color: "border-green-500"
    },
    {
      name: "Monthly Plan",
      subtitle: "Best Value",
      price: "₹1,799",
      period: "per month",
      originalPrice: "₹1,996",
      description: "Maximum savings with consistent nutrition delivery",
      features: [
        "28-30 daily greens pouches",
        "Advanced health analytics",
        "Free monthly delivery",
        "Nutrition coaching calls",
        "Recipe video library",
        "Loyalty rewards program"
      ],
      cta: "Save with Monthly",
      popular: false,
      color: "border-amber-500"
    }
  ];

  const addOns = [
    {
      name: "Wheatgrass Shots",
      price: "₹500/month",
      description: "7 concentrated wheatgrass shots weekly"
    },
    {
      name: "Custom Smoothies",
      price: "₹600/month", 
      description: "Pre-made smoothie packets with your greens"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your <span className="text-gradient">Nutrition Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible plans designed to fit your lifestyle. Start small or commit to transformation.
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-6 hover:shadow-xl transition-all duration-300 ${plan.color} ${plan.popular ? 'ring-2 ring-green-500' : ''} animate-scale-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                
                <div className="mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/{plan.period}</span>
                </div>
                
                {plan.originalPrice && (
                  <p className="text-sm text-gray-500">
                    <span className="line-through">{plan.originalPrice}</span>
                    <span className="text-green-600 ml-2 font-medium">Save ₹197</span>
                  </p>
                )}
                
                <p className="text-sm text-gray-600 mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 'bg-gradient-green hover:shadow-lg' : 'bg-gray-800 hover:bg-gray-700'} transition-all duration-200`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Boost Your Plan with <span className="text-gradient">Add-ons</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{addon.name}</h4>
                    <p className="text-sm text-gray-600">{addon.description}</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">{addon.price}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                  Add to Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-green-50 rounded-2xl p-8 max-w-3xl mx-auto border border-green-200">
            <div className="text-4xl mb-4">🛡️</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">100% Satisfaction Guarantee</h4>
            <p className="text-gray-600">
              Not happy with your greens? We'll replace them or credit your wallet balance. 
              Cancel anytime with 48-hour notice before your next delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
