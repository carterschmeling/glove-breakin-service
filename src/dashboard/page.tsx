import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = await auth()
  
  // Redirect to home if not logged in
  if (!userId) {
    redirect('/')
  }
  
  const user = await currentUser()
  
  return (
    <div className="min

-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-4">Welcome, {user?.firstName || 'Player'}! 🧈</h1>
        <p className="text-gray-600 mb-8">Manage your glove orders and account</p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-200">
          <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
          <p className="text-gray-500">No orders yet. Ready to break in your first glove?</p>
          
          <button className="mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-full font-bold hover:from-orange-600 hover:to-amber-600 transition">
            Place New Order
          </button>
        </div>
      </div>
    </div>
  )
}
