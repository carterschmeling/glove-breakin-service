export default function MyOrdersPage() {
  return (
    <div className="min-h-screen bg-amber-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex items-center gap-4 mb-16">
          <a href="/" className="inline-block">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">🧈</span>
            </div>
          </a>
          <div>
            <h1 className="text-5xl font-black text-gray-900">My Orders</h1>
            <p className="text-xl text-gray-600">Track your glove break-in orders</p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Empty State */}
          <div className="text-center py-24">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <span className="text-5xl">📦</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-xl text-gray-600 mb-8">Your glove break-in orders will appear here</p>
            <a href="/order" className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-4 rounded-2xl font-bold text-xl hover:from-orange

-600 hover:to-amber-600 shadow-lg hover:shadow-xl transition-all">
              Place First Order
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}
