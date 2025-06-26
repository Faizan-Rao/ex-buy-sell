import React from 'react'

const OtpVerification = () => {
  return (
      <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 lg:p-20">
          {/* Left Section - OTP Form */}
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-16">
            <div className="bg-[#d0ff00] w-12 h-12 flex items-center justify-center rounded-md">
              <Image src={'/logo.png'} height={60} width={60} alt={"logo.png"}/>
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
  )
}

export  {OtpVerification}