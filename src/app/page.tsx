import { auth } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'

export default async function Home() {
  const { userId } = auth()
  
  return (
    <div className="min-h-screen bg-amber-50">
      
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-black text

-white flex items-center gap-2">
            🧈 BUTTER MITTS
          </div>
          <div className="flex gap-6 items-center">
            <a href="#services" className="text-white font-semibold hover:text-amber-100 transition">Services</a>
            <a href="#pricing" className="text-white font-semibold hover:text-amber-100 transition">Pricing</a>
            
            {!userId ? (
              <a href="/signin">
                <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold hover:bg-amber-100 transition shadow-lg">
                  Sign In
                </button>
              </a>
            ) : (
              <>
                <a href="/orders">
                  <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold hover:bg-amber-100 transition shadow-lg">
                    My Orders
                  </button>
                </a>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
            
            <a href="/order">
              <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold hover:bg-amber-100 transition shadow-lg">
                Order Now
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm mb

-6 shadow-md">
            ⚡ SOFT AS BUTTER • GAME-READY FAST
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gray-900 leading-tight">
            Melt-In-Your-Hand<br />
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Glove Break-In
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
            Professional mallet shaping and conditioning that transforms stiff leather into buttery-smooth perfection.
          </p>
          <a href="/order">
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-5 rounded-full text-xl font-black hover:from-orange-600 hover:to-amber-600 transition shadow-2xl transform hover:scale-105">
              Get Started - $49 →
            </button>
          </a>
          
          <div className="mt-20 grid grid-cols-2 gap-8 max-w-xl mx-auto">
            <div

 className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-200">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">2-5</div>
              <div className="text-gray-600 font-semibold mt-2">Day Turnaround</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-200">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">100%</div>
              <div className="text-gray-600 font-semibold mt-2">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-gray-900">What We Do</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Professional techniques for buttery results</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-10 rounded-3xl shadow-xl border-2 border-orange-200 hover:shadow-2xl hover

:scale-105 transition-all">
              <div className="text-7xl mb-6">🔨</div>
              <h3 className="text-3xl font-black mb-4 text-orange-600">Mallet Shaping</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Over 2,000 precision mallet strikes to form a deep, consistent pocket tailored specifically to your playing position.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-10 rounded-3xl shadow-xl border-2 border-amber-200 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-7xl mb-6">✨</div>
              <h3 className="text-3xl font-black mb-4 text-amber-600">Premium Conditioning</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Professional-grade leather oil treatment to maintain softness, flexibility, and durability for years of play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-gray-900"> 



Simple Pricing</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Choose the service level that fits your needs</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-4 border-gray-300 rounded-3xl p-10 hover:border-orange-400 transition-all shadow-xl">
              <div className="text-sm font-black text-gray-500 uppercase tracking-wide mb-2">Standard</div>
              <div className="text-7xl font-black mb-6 text-gray-900">$49</div>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 items-start">
                  <span className="text-orange-500 text-2xl font-black">✓</span>
                  <span className="text-gray-700 text-lg">Professional mallet pocket shaping</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-orange-500 text-2xl font-black">✓

</span>
                  <span className="text-gray-700 text-lg">Basic leather conditioning</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-orange-500 text-2xl font-black">✓</span>
                  <span className="text-gray-700 text-lg">5-day turnaround</span>
                </li>
              </ul>
              <a href="/order">
                <button className="w-full py-4 bg-gray-900 text-white rounded-full font-black text-lg hover:bg-gray-800 transition shadow-lg">
                  Select Standard
                </button>
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-3xl p-10 transform md:scale-110 shadow-2xl border-4 border-orange-600">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-black uppercase tracking-wide">Premium</div>
                <div className="bg-white text-orange-600 px-4 py-1 rounded-full text-xs font-black shadow-md">
                  🔥 MOST POPULAR
                </div>
              </div>
              <div className="text-7xl font-black mb-6">$79</div>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 items-start">
                  <span className="text-2xl font-black">✓</span>
                  <span className="text-lg"><strong>Advanced mallet work</strong> (2,000+ strikes)</span>
                </li>
                

<li className="flex gap-3 items-start">
                  <span className="text-2xl font-black">✓</span>
                  <span className="text-lg">Thumb and pinky flare customization</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-2xl font-black">✓</span>
                  <span className="text-lg"><strong>Premium conditioning treatment</strong></span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-2xl font-black">✓</span>
                  <span className="text-lg"><strong>Expedited 2-day turnaround</strong></span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-2xl font-black">✓</span>
                  <span className="text-lg">Free return shipping</span>
                </li>
              </ul>
              <a href="/order">
                <button className="w-full py-5 bg-white text-orange-600 rounded-full font-black text-lg hover:bg-amber-50 transition shadow-xl">
                  Select Premium →
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 text-gray-900">How It Works</h2>
          
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20

 h-20 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">
                  1
                </div>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl flex-1 border-2 border-orange-200">
                <h3 className="text-2xl font-black mb-2 text-orange-600">Order & Ship</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Choose your service tier online. We'll email you a prepaid shipping label within minutes. Pack your glove and drop it at any UPS location.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">
                  2
                </div>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl flex-1 border-2 border-orange-200">
                <h3 className="text-2xl font-black mb-2 text-orange-600">Professional Break-In</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our technicians use precision mallet work and premium conditioning to create the perfect pocket for your position

.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">
                  3
                </div>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl flex-1 border-2 border-orange-200">
                <h3 className="text-2xl font-black mb-2 text-orange-600">Game Ready</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Your glove ships back within 2-5 business days, ready to use immediately. No additional break-in needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-2xl mb-10 font-semibold">
            Join thousands of players

 who trust us with their gloves
          </p>
          <a href="/order">
            <button className="bg-white text-orange-600 px-16 py-6 rounded-full font-black text-2xl hover:bg-amber-50 transition shadow-2xl transform hover:scale-105">
              

Place Your Order →
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p className="text-sm">© 2024 Butter Mitts 🧈 • Professional Break-In Services</p>
      </footer>

    </div>
  );
}
