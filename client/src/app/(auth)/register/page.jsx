"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SignInForm } from "@/components/register/signin";
import { OtpVerification } from "@/components/register/otp-verification";
import { OTPSend } from "@/components/register/otp-send";
import { FormStepper } from "@/components/custom/form-stepper";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(3);
  return (
    <div className="flex flex-col  md:flex-row w-full max-w-[430px] md:max-w-1920 h-full min-h-screen  mx-auto">
        
      
      {/* Left Section - Sign Up Form */}
      <div className="flex justify-center items-center max-w-[430px] md:max-w-[960px] w-full mx-auto flex-col gap-4">
        {currentStep === 1 && <SignInForm />}
        {currentStep === 2 && <OTPSend />}
        {currentStep === 3 && <OtpVerification />}

        <FormStepper
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
      {/* Right Section - Image and Text */}
      <div className="w-full md:w-1/2 relative hidden md:flex bg-[url('/Registerimage.png')] bg-cover p-10  justify-center items-end">
        <div className="flex flex-col justify-center z-20 px-12 py-16 bg-white/30 backdrop-invert backdrop-opacity-10">
          <div className="max-w-md">
            <p className="text-2xl font-medium text-white mb-6">
              "Find the perfect deal securely and effortlessly. Connect with the
              right buyers and sellers today—fast, safe, and seamless!"
            </p>
            <h3 className="text-xl font-medium text-white mb-1">
              Verified by Industry Experts
            </h3>
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
  );
}
