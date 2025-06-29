
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    gender: "",
    age: "",
    activity: "",
    goals: "",
    dietary: ""
  });

  const questions = [
    {
      id: "gender",
      title: "What's your gender?",
      options: ["Male", "Female", "Prefer not to say"]
    },
    {
      id: "age",
      title: "What's your age group?",
      options: ["18-25", "26-35", "36-45", "46-55", "55+"]
    },
    {
      id: "activity",
      title: "How active are you?",
      options: ["Sedentary", "Lightly Active", "Moderately Active", "Very Active", "Extremely Active"]
    },
    {
      id: "goals",
      title: "What's your primary health goal?",
      options: ["Weight Loss", "Muscle Gain", "Detox & Cleanse", "General Wellness", "Energy Boost"]
    },
    {
      id: "dietary",
      title: "Any dietary preferences?",
      options: ["No Restrictions", "Vegetarian", "Vegan", "Gluten-Free", "Keto-Friendly"]
    }
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      // Quiz completed - show results
      setTimeout(() => showResults(), 300);
    }
  };

  const showResults = () => {
    // This would typically call an API to generate personalized recommendations
    alert("🎉 Quiz Complete! Your personalized greens plan is being generated...");
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({
      gender: "",
      age: "",
      activity: "",
      goals: "",
      dietary: ""
    });
  };

  return (
    <section id="quiz-section" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Discover Your Perfect <span className="text-gradient">Greens Formula</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take our 2-minute health quiz to get your AI-powered, personalized nutrition plan.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-green h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Quiz Card */}
          <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-scale-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {questions[currentStep].title}
              </h3>
              <p className="text-gray-600">
                Select the option that best describes you
              </p>
            </div>

            <div className="space-y-3">
              {questions[currentStep].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full p-6 text-left justify-start hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all duration-200 text-base"
                  onClick={() => handleAnswer(questions[currentStep].id, option)}
                >
                  <span className="mr-3 text-green-500">○</span>
                  {option}
                </Button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="ghost"
                onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                disabled={currentStep === 0}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Previous
              </Button>
              
              <Button
                variant="ghost"
                onClick={resetQuiz}
                className="text-gray-500 hover:text-gray-700"
              >
                Start Over
              </Button>
            </div>
          </Card>

          {/* Quiz Results Preview */}
          <div className="mt-12 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200">
              <h4 className="font-semibold text-gray-800 mb-2">
                🔬 What You'll Get After The Quiz:
              </h4>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span className="bg-green-100 px-3 py-1 rounded-full">Custom Greens Mix</span>
                <span className="bg-green-100 px-3 py-1 rounded-full">Daily Intake Plan</span>
                <span className="bg-green-100 px-3 py-1 rounded-full">Nutritional Benefits</span>
                <span className="bg-green-100 px-3 py-1 rounded-full">Delivery Schedule</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
