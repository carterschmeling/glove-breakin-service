export default function OrderPage() {
  return (
    <div className="min-h-screen bg-amber-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-20">
          <a href="/" className="inline-block mb-8">
           

 <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-2xl mx-auto">
              <span className="text-5xl">🧈</span>
            </div>
          </a>
          <h1 className="text-6xl font-black text-gray-900 mb-4">Place Order</h1>
          <p className="text-2xl text-gray-600">Order your glove break-in service</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Order Form */}
          <div className="bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-8">Order Details</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-3">Service Type</label>
                <select className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-lg focus:border-orange-500 outline-none">
                  <option>Standard - $49</option>
                  <option>Premium - $79</option>
                </select>
              </div>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-3">Glove Brand</label>
                <input 
                  type="text"
                  placeholder="Wilson, Rawlings, etc."
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-lg focus:border-orange-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-3">Glove Model</label>
                <input 
                  type="text"
                  placeholder="A2000, Pro Stock, etc."
                  className="w-full px-5 py-4 bg-gray-50 border-2 border

-gray-200 rounded-2xl text-lg focus:border-orange-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-3">Position</label>
                <select className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-lg focus:border-orange-500 outline-none">
                  <option>Infield</option>
                  <option>Outfield</option>
                  <option>Catcher</option>
                  <option>First Base</option>
                </select>
              </div>
              
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-3">Special Instructions</label>
                <textarea 
                  rows="4"
                  placeholder="Deep pocket, thumb flare, etc."
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-lg focus:border-orange-500 outline-none resize-vertical"
                ></textarea>
              </div>
              
              <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-6 rounded-2xl text-xl font-black hover:from-orange-600 hover:to-amber-600 shadow-xl hover:shadow-2xl transition-all duration-300">
                Place Order →
              </button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-12 rounded-3xl shadow-xl border-2 border-orange-200">
            <h2 className="text-3xl font-bold mb-8 text-orange-600">Order Summary</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm">
                <span className="text-xl font-semibold">Standard Service</span>
                <span className="text-3xl font-black text-orange-600">$49</span>
              </div>
              
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="flex justify-between mb-2">
                  <span>Glove Details</span>
                  <span className="text-orange-600 font-bold">Add glove</span>
                </div>
                <div className="text-gray-500 text-sm">No glove selected</div>
              </div>
              
              <div className="p-6 bg-white rounded-2xl shadow-sm

">
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                <div className="text-gray-500 text-sm">Return shipping included</div>
              </div>
              
              <div className="pt-6 border-t-2 border-gray-200">
                <div className="flex justify-between text-2xl font-black">
                  <span>Total</span>
                  <span>$49</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
