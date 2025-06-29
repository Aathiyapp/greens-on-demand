
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToQuiz = () => {
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-green-300 rounded-full opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-amber-200 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🌱 Fresh • Personalized • Delivered Daily
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient">Personalized Nutrition.</span>
            <br />
            <span className="text-gray-800">Delivered Fresh.</span>
            <br />
            <span className="text-amber-600">Daily.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Get your custom blend of microgreens, sprouts, and functional greens based on your unique health profile. No guesswork. Just results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              onClick={scrollToQuiz}
              className="bg-gradient-green hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-lg px-8 py-6 rounded-full"
            >
              Start Your Health Quiz
            </Button>
            <Button 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-50 text-lg px-8 py-6 rounded-full"
            >
              View Plans
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Locally Grown in Bengaluru</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>AI-Powered Personalization</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Weekly Fresh Delivery</span>
            </div>
          </div>
        </div>
        
        {/* Right Content - Hero Image */}
        <div className="flex-1 relative animate-scale-in">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            {/* Main product image placeholder */}
            <div className="w-full h-96 lg:h-[500px] bg-gradient-subtle rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🥬</span>
                </div>
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Fresh Daily Pouches</h3>
                <p className="text-green-600">Your personalized microgreens delivered fresh every week</p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg animate-float">
                <span className="text-green-500 text-xl">🌿</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-full p-3 shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                <span className="text-amber-500 text-xl">✨</span>
              </div>
            </div>
            
            {/* Delivery badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📦</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Weekly Delivery</p>
                  <p className="text-sm text-gray-500">Every Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-green-500" />
      </div>
    </section>
  );
};

export default Hero;
