
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-green-400">MicroFit</span> Greens
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering urban health through hyperlocal, AI-personalized nutrition. 
              Started by urban farmers, backed by nutritionists and food-tech experts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                📱 Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                💼 LinkedIn  
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                📺 YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Quiz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recipe Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:support@microfitgreens.in" className="hover:text-white transition-colors">
                  📧 support@microfitgreens.in
                </a>
              </li>
              <li>
                <a href="tel:+91" className="hover:text-white transition-colors">
                  📞 Call Support
                </a>
              </li>
              <li className="text-sm">Mon–Sat 9AM–7PM</li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  💬 Live Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Policies */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-green-400">Delivery & Policies</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>🚚 All deliveries scheduled every Sunday/Monday</li>
                <li>🔄 Cancel 48 hours before next dispatch</li>
                <li>💰 Damaged packets credited as wallet balance</li>
                <li>🔒 All personal data encrypted & secure</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-400">Coverage Area</h4>
              <p className="text-sm text-gray-400 mb-2">Currently serving Bengaluru:</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Koramangala, HSR Layout, BTM Layout</li>
                <li>• Indiranagar, Whitefield, Electronic City</li>
                <li>• Jayanagar, JP Nagar, Marathahalli</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 MicroFit Greens. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
