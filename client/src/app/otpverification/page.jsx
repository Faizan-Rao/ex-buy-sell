import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function OTPVerification() {
  return (
    <main className="flex min-h-screen max-h-[1080px] max-w-[1920px] mx-auto overflow-hidden">
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
            <h1 className="text-2xl font-bold text-center mb-2">OTP Verification</h1>
            <p className="text-center text-gray-600 mb-8">
              Check your inbox. We sent a code to
              <br />
              example@gmail.com
            </p>

            {/* OTP Input Fields */}
            <div className="flex justify-center gap-3 mb-8">
              {[5, 3, "", ""].map((value, index) => (
                <div
                  key={index}
                  className="w-16 h-16 border border-gray-300 rounded-md flex items-center justify-center text-2xl font-semibold"
                >
                  {value}
                </div>
              ))}
            </div>

            {/* Continue Button */}
            <button className="w-full py-3 bg-[#d0ff00] text-black font-medium rounded-full mb-4">Continue</button>

            {/* Resend Code */}
            <p className="text-center text-sm text-gray-600">
              Didn't get a code? <button className="text-blue-600 font-medium">Click to resend</button>
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center space-x-2">
            <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Section - Image and Text */}
      <div className="hidden md:block w-1/2 relative">
        <Image src="/Registerimage.png" alt="Professional woman" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end z-10 px-12 py-16">
          <div className="max-w-[788px] max-h-[364px] bg-[#FFFFFF26] rounded-[32px] p-8  backdrop-blur-[54px]  mb-16">
            <p className="md:text-[32px] leading-[120%] font-medium text-white mb-6">
              "Find the perfect deal securely and effortlessly. Connect with the right buyers and sellers today—fast,
              safe, and seamless!"
            </p>

            <div className="flex justify-between items-center">

            <div>
            <h3 className="text-[32px] font-medium leading-[150%] text-white mb-1">Verified by Industry Experts</h3>
            <p className=" md:text-[18px] text-[#FFFFFFB2] mb-3">Trusted by users worldwide</p>
           

            <div className="flex mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-white fill-white" />
              ))}
            </div>

            </div>
            
            <div className="flex ">
              <button className="w-[68px] h-[68px] group hover:bg-[white] rounded-full transition-all bg-white/20 flex items-center justify-center mr-2">
                <ChevronLeft className="h-6 w-6 text-white group-hover:text-black" />
              </button>
              <button className="w-[68px] h-[68px] group rounded-full hover:bg-[white] transition-all bg-white/20 flex items-center justify-center">
                <ChevronRight className="h-6 w-6 text-white group-hover:text-black" />
              </button>
            </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
