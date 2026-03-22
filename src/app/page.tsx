export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">GLOVE PRO</div>
          <div className="flex gap-6 items-center">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700">
              Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          

<h1 className="text-6xl md:text-7xl font-black mb-6 text-gray-900">
            Professional Glove<br />Break-In Service
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We transform stiff gloves into game-ready equipment using professional mallet shaping and conditioning techniques.
          </p>
          <button className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-blue-700 shadow-lg">
            Get Started - $49
          </button>
          
          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-black text-blue-600">2000+</div>
              <div className="text-gray-600 text-sm mt-1">Gloves Serviced</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-600">2-5</div>
              <div className="text-gray-600 text-sm mt-1">Day Turnaround</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-600">100

%</div>
              <div className="text-gray-600 text-sm mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-center text-gray-600 mb-12">Professional techniques for perfect results</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="text-6xl mb-6">🔨</div>
              <h3 className="text-2xl font-bold mb-4">Mallet Shaping</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 2,000 precision mallet strikes to form a deep, consistent pocket tailored specifically to your playing position.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="text-6xl mb-6">✨</div>
              <h3 className="text-2xl font-bold mb-4">Premium Conditioning</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional-grade leather oil treatment to maintain softness, flexibility, and durability for years of play.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">


          <h2 className="text-4xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-center text-gray-600 mb-16">Choose the service level that fits your needs</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Standard */}
            <div className="border-2 border-gray-200 rounded-2xl p-10 hover:border-blue-600 transition">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Standard</div>
              <div className="text-6xl font-black mb-6">$49</div>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Professional mallet pocket shaping</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Basic leather conditioning</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">5-day turnaround</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Free return shipping</span>
                </li>
              </ul>
              

<button className="w-full py-4 border-2 border-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition">
                Select Standard
              </button>
            </div>

            {/* Premium */}
            <div className="bg-blue-600 text-white rounded-2xl p-10 transform md:scale-105 shadow-2xl">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold uppercase tracking-wide text-blue-200">Premium</div>
                <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              </div>
              <div className="text-6xl font-black mb-6">$79</div>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 items-start">
                  <span className="text-xl">✓</span>
                  <span><strong>Advanced mallet work</strong> (2,000+ strikes)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-xl">✓</span>
                  <span>Thumb and pinky flare customization</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-xl">✓</span>
                  <span><strong>Premium conditioning treatment

</strong></span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-xl">✓</span>
                  <span><strong>Expedited 2-day turnaround</strong></span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-xl">✓</span>
                  <span>Free return shipping</span>
                </li>
              </ul>
              <button className="w-full py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition">
                Select Premium
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="space-y-12">
            
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Order & Ship</h3>
                <p className="text-gray-600 text-lg">
                  Choose your service tier online. We'll email you a prepaid shipping label within minutes. Pack your glove and drop it at any UPS location.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start

">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Professional Break-In</h3>
                <p className="text-gray-600 text-lg">
                  Our technicians use precision mallet work and premium conditioning to create the perfect pocket for your position.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Game Ready</h3>
                <p className="text-gray-600 text-lg">
                  Your glove ships back within 2-5 business days, ready to use immediately. No additional break-in needed.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Join thousands of players who trust us with

 their gloves
          </p>
          <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-2xl">
            Place Your Order
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p className="text-sm">© 2024 Glove Pro • Professional Break-In Services</p>
      </footer>

    </div>
  );
}
