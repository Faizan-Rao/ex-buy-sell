import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function OTPSend() {
  return (
    <div className="flex min-h-screen max-h-[1080px] max-w-[1920px] mx-auto overflow-hidden">
      {/* Left Section - OTP Form */}
      <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 lg:p-20">
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-16">
            <div className="bg-[#d0ff00] w-12 h-12 flex items-center justify-center rounded-md">
              <span className="font-bold text-black text-xl">EX</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="mb-16">
            <h1 className="text-3xl font-semibold mb-2 text-center font-sora">Enter Your Phone Nr.</h1>
            <p className="text-gray-600 text-lg  font-normal mb-2 text-center font-sora mb-8">Type in your number and verify</p>

            {/* Country Selector and Phone Input */}
            <div className="flex mb-6">
              <div className="relative">
                <button className="flex items-center justify-between border border-gray-300 rounded-l-md px-3 py-2 bg-white h-[42px]">
                  <div className="flex items-center">
                    <Image src="/flag.png" alt="US Flag" width={20} height={15} className="mr-2" />
                    <span className="text-sm">US +1</span>
                  </div>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <input
                type="tel"
                placeholder="Phone number"
                className="flex-1 border border-gray-300 border-l-0 rounded-r-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Continue Button */}
            <button className="w-full py-3 bg-[#d0ff00] text-black fonr-sora font-medium rounded-full !mb-8">Continue</button>

            {/* Resend Code */}
            <p className="text-center text-sm text-gray-600">
              Didn't get a code? <button className="text-black font-semibold">Click to resend</button>
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center space-x-2">
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Section - Image and Text */}
      <div className="w-full md:w-1/2 relative hidden md:flex bg-[url('/Registerimage.png')] bg-cover p-10  justify-center items-end">
        
        <div className="flex flex-col justify-center z-20 p-4 bg-white/30 backdrop-invert backdrop-opacity-10 rounded-xl">
          <div className="max-w-md">
            <p className="text-2xl font-medium text-white mb-6">
              "Find the perfect deal securely and effortlessly. Connect with the right buyers and sellers today—fast,
              safe, and seamless!"
            </p>
            <h3 className="text-xl font-medium text-white mb-1">Verified by Industry Experts</h3>
            <p className="text-white mb-3">Trusted by users worldwide</p>
            <div className="flex mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-white fill-white" />
              ))}
            </div>
            <div className="flex">
              <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
