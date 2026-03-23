import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        
        <div className

="text-center mb-12">
          <a href="/" className="inline-block mb-10">
            <div className="w-28 h-28 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-2xl mx-auto border-4 border-white">
              <span className="text-6xl">🧈</span>
            </div>
          </a>
          <h1 className="text-5xl font-black mb-4 text-gray-900">Sign in</h1>
          <p className="text-xl text-gray-600">Welcome back to Butter Mitts</p>
        </div>
        
        <div className="flex justify-center">
          <SignIn />
        </div>
        
        <a href="/" className="block text-center mt-8 text-gray-600 hover:text-gray-900">← Back to home</a>
      </div>
    </div>
  );
}
