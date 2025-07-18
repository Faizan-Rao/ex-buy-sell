import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { User, Mail, Lock } from "lucide-react"
const SignInForm = () => {
  return (
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-5 lg:p-10">
          {/* Left Section - Sign Up Form */}
        <div className="w-full max-w-[430px]">
          {/* Logo */}
          <div className="mb-8">
            <div className="bg-[#d0ff00] w-12 h-12 flex items-center justify-center rounded-md">
              <Image src={'/logo.png'} height={60} width={60} alt={"logo.png"}/>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-semibold font-sora text-center mb-2">Create Account</h1>
          <p className="text-center text-lg font-normal text-gray-600 mb-8">Start your Journey now with EX</p>

          {/* Social Sign Up Buttons */}
          <button className="w-full !text-base text-black font-normal !font-sora flex items-center justify-center gap-2 border bg-gray-100 rounded-full py-3 !mb-3  hover:bg-gray-50">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.8055 10.2275C19.8055 9.51 19.7455 8.9925 19.6155 8.455H10.2055V12.2075H15.6955C15.5955 13.0175 15.0355 14.2675 13.7055 15.0875L13.6855 15.2175L16.6655 17.5025L16.8855 17.525C18.7855 15.785 19.8055 13.235 19.8055 10.2275Z"
                fill="#4285F4"
              />
              <path
                d="M10.2055 19.9999C12.9555 19.9999 15.2655 19.0999 16.8855 17.5249L13.7055 15.0874C12.8655 15.6674 11.7255 16.0674 10.2055 16.0674C7.5955 16.0674 5.3855 14.3349 4.5855 11.9349L4.4655 11.9449L1.3655 14.3124L1.3155 14.4299C2.9255 17.7574 6.3055 19.9999 10.2055 19.9999Z"
                fill="#34A853"
              />
              <path
                d="M4.5855 11.9349C4.3655 11.3949 4.2355 10.8099 4.2355 10.1999C4.2355 9.58994 4.3655 9.00494 4.5755 8.46494L4.5705 8.32744L1.4305 5.92744L1.3155 5.96994C0.485498 7.43994 0.00549889 9.07494 0.00549889 10.1999C0.00549889 11.3249 0.485498 12.9599 1.3155 14.4299L4.5855 11.9349Z"
                fill="#FBBC05"
              />
              <path
                d="M10.2055 4.33249C12.1055 4.33249 13.3555 5.22499 14.0755 5.89749L16.9155 3.14749C15.2555 1.59749 12.9555 0.5 10.2055 0.5C6.3055 0.5 2.9255 2.74249 1.3155 6.06999L4.5755 8.46499C5.3855 6.06499 7.5955 4.33249 10.2055 4.33249Z"
                fill="#EB4335"
              />
            </svg>
            <span>Sign Up With Google</span>
          </button>

          <button className="w-full flex !text-base text-black font-normal !font-sora items-center justify-center gap-2 border bg-gray-100 rounded-full py-3 mb-6 hover:bg-gray-50">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.0625 0C14.1042 0 14.1458 0 14.1875 0C14.2708 1.67708 13.5417 2.90625 12.7917 3.75C12.0417 4.59375 11.0208 5.20833 9.79167 5.125C9.70833 3.47917 10.4583 2.33333 11.2083 1.48958C11.9167 0.6875 13.0417 0.104167 14.0625 0Z"
                fill="black"
              />
              <path
                d="M19.0625 14.5833C19.0625 14.625 19.0625 14.6667 19.0625 14.7083C18.6458 16.0208 17.9375 17.1667 17.1458 18.2292C16.4167 19.1875 15.5625 20 14.2708 20C13.0625 20 12.2708 19.3958 11.1875 19.375C10.0625 19.3542 9.35417 19.9167 8.14583 20C8.0625 20 7.97917 20 7.89583 20C7.02083 19.9375 6.27083 19.1875 5.66667 18.4375C4.14583 16.5625 2.9375 14.2708 2.8125 11.4375C2.8125 11.3542 2.8125 11.2708 2.8125 11.1875C2.8125 8.77083 4.0625 6.9375 5.875 5.9375C6.77083 5.41667 7.85417 5.0625 8.9375 5.125C9.5 5.14583 10.0625 5.3125 10.5833 5.47917C11.0208 5.625 11.5 5.83333 12.0208 5.83333C12.3958 5.83333 12.7708 5.66667 13.1667 5.54167C14.0208 5.27083 14.9375 4.95833 16.0208 5.08333C17.3958 5.22917 18.4792 5.79167 19.1875 6.70833C18.0208 7.5 17.1875 8.77083 17.2708 10.5C17.3542 12.0625 18.1042 13.1667 19.0625 14.5833Z"
                fill="black"
              />
            </svg>
            <span>Sign Up With Apple</span>
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center mb-6">
            <span className="text-sm font-normal font-sora text-gray-500">Or Continue With</span>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-base font-normal font-sora text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-3xl  !text-base font-normal !font-sora "
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-3xl  !text-base font-normal !font-sora "
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter you email"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-3xl  !text-base font-normal !font-sora "
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                placeholder="Create password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 !rounded-3xl !text-base font-normal !font-sora "
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <input type="checkbox" id="terms" className="mt-1 mr-2" />
              <label htmlFor="terms" className="!text-base font-normal !font-sora text-gray-600">
                I agree to Terms of Use and Privacy Policy
              </label>
            </div>

            {/* Create Account Button */}
            <button type="submit" className="w-full py-3 bg-[#C5FD1F] text-black !text-base font-normal !font-sora rounded-full">
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 font-medium">
                Log In
              </Link>
            </p>
          </div>

          
        </div>
      </div>
  )
}

export {SignInForm}