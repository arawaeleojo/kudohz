"use client";

import { useState } from "react";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Flame, User, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      className="
        min-h-dvh
        w-full
        max-w-sm
        mx-auto
        flex
        flex-col
        bg-[#F7F3EC]
        px-6
        py-8
        relative
      "
    >
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-[#111827] mt-2 w-fit hover:opacity-70 transition-opacity"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Logo & Header */}
      <div className="flex flex-col items-center mt-6">
        {/* Placeholder Logo */}
        <div className="w-16 h-16 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#0F5B5B] shadow-sm mb-4">
          <Flame size={32} />
        </div>
        <h1 className="text-2xl font-bold text-[#111827] tracking-tight">
          Create your account 🍃
        </h1>
        <p className="mt-2 text-[#6B7280] text-sm">
          Start your journey of becoming.
        </p>
      </div>

      {/* Form */}
      <div className="mt-10 flex flex-col gap-5">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#111827]">Full Name</label>
          <div className="relative flex items-center">
            <User
              size={18}
              className="absolute left-3 text-[#9CA3AF]"
            />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-white border border-[#E5E7EB] rounded-xl py-3.5 pl-10 pr-4 text-sm text-[#111827] outline-none focus:border-[#0F5B5B] focus:ring-1 focus:ring-[#0F5B5B] transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#111827]">Email</label>
          <div className="relative flex items-center">
            <Mail
              size={18}
              className="absolute left-3 text-[#9CA3AF]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white border border-[#E5E7EB] rounded-xl py-3.5 pl-10 pr-4 text-sm text-[#111827] outline-none focus:border-[#0F5B5B] focus:ring-1 focus:ring-[#0F5B5B] transition-all"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#111827]">Password</label>
          <div className="relative flex items-center">
            <Lock
              size={18}
              className="absolute left-3 text-[#9CA3AF]"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full bg-white border border-[#E5E7EB] rounded-xl py-3.5 pl-10 pr-10 text-sm text-[#111827] outline-none focus:border-[#0F5B5B] focus:ring-1 focus:ring-[#0F5B5B] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-[#9CA3AF] hover:text-[#4B5563] transition-colors"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          
          {/* Password Requirements */}
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <CheckCircle2 size={16} className="text-[#0F5B5B]" />
              <span>At least 8 characters</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <CheckCircle2 size={16} className="text-[#0F5B5B]" />
              <span>Includes a number</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <CheckCircle2 size={16} className="text-[#0F5B5B]" />
              <span>Includes a special character</span>
            </div>
          </div>
        </div>

        {/* Sign Up Button */}
        <button 
          onClick={() => router.push("/home")}
          className="w-full bg-[#0F5B5B] text-white font-medium rounded-full py-4 mt-4 hover:bg-[#0B4444] transition-colors shadow-md"
        >
          Sign Up
        </button>
      </div>

      {/* Or Divider */}
      <div className="flex items-center gap-4 mt-8 mb-6">
        <div className="flex-1 h-px bg-[#E5E7EB]" />
        <span className="text-sm text-[#6B7280]">or</span>
        <div className="flex-1 h-px bg-[#E5E7EB]" />
      </div>

      {/* Social Logins//there should be a better way to do this though not just hardcode everything here  */}
      <div className="flex flex-col gap-3">
        <button className="w-full bg-white border border-[#E5E7EB] rounded-full py-3.5 flex items-center justify-center gap-3 hover:bg-black/5 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19.01 23.7449 15.92 23.7449 12.27Z"
            />
            <path
              fill="#34A853"
              d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.11492 19.25 6.45492 17.14 5.50492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
            />
            <path
              fill="#FBBC05"
              d="M5.50492 14.29C5.26492 13.56 5.12492 12.79 5.12492 12C5.12492 11.21 5.26492 10.44 5.50492 9.71V6.62H1.54492C0.734921 8.23 0.254921 10.06 0.254921 12C0.254921 13.94 0.734921 15.77 1.54492 17.38L5.50492 14.29Z"
            />
            <path
              fill="#EA4335"
              d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.50492 9.71C6.45492 6.86 9.11492 4.75 12.2549 4.75Z"
            />
          </svg>
          <span className="text-sm font-medium text-[#111827] ">
            Continue with Google
          </span>
        </button>

        <button className="w-full bg-white border border-[#E5E7EB] rounded-full py-3.5 flex items-center justify-center gap-3 hover:bg-black/5 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.48.09 2.68.64 3.42 1.62-2.95 1.77-2.45 5.56.5 6.77-1.11 2.39-2.52 4.58-4.5 4.58zm-4.75-13.6c-.15-1.88 1.34-3.46 3.16-3.68.27 2-1.35 3.8-3.16 3.68z" />
          </svg>
          <span className="text-sm font-medium text-[#111827]">
            Continue with Apple
          </span>
        </button>
      </div>

      {/* Footer Log In */}
      <div className="mt-8 flex items-center justify-center gap-1">
        <span className="text-sm text-[#6B7280]">
          Already have an account?
        </span>
        <Link
          href="/onboarding/login"
          className="text-sm font-medium text-[#0F5B5B] hover:underline"
        >
          Log in
        </Link>
      </div>
    </main>
  );
}
