"use client";
import React, { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

import toast, { Toaster } from "react-hot-toast";
import { useForgotPasswordMutation } from "@/lib/api/authApi";
interface LoginFormProps {
  onLogin: () => void;
}
export default function Login() {
  const [email, setEmail] = useState("");
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [error, setError] = useState("");

  const [forgotPassword] = useForgotPasswordMutation();
  const ErrorNotification = (msg: string) => toast.error(msg);
  const SuccessNotification = (msg: string) => toast.success(msg);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmiting(true);
    try {
      const response = await forgotPassword({ email }).unwrap();
      console.log(response?.message);
      setIsSubmiting(false);
      SuccessNotification(response?.message);
      setEmail("");
    } catch (error: any) {
      ErrorNotification(error?.data?.message);
      setIsSubmiting(false);
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              <span className="text-blue-600">E</span>-Learning
            </h2>
            <p className="text-gray-600">
              Email réinitialisation de votre mot de passe
            </p>
          </div>
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
              <div className="flex items-center">
                <i className="fas fa-exclamation-circle text-red-500 mr-2"></i>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Adresse email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmiting}
                className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                  isSubmiting
                    ? "cursor-not-allowed bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap`}
              >
                {isSubmiting ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4 mr-2 text-gray-200 animate-spin  fill-yellow-400 "
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <FaPaperPlane className="mr-2" />
                )}
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
