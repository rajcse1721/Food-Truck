// ContactPage.jsx
import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmitted(true);
    // Here you can also trigger an actual API call if needed
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-3 py-3">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 mb-8">
            Feel free to reach out to us for any inquiries or feedback. We're
            here to help!
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <span className="text-blue-500">📞</span> +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-500">📧</span> support@example.com
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-500">📍</span> 123 Main Street,
              Cityville
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Thank you!
              </h2>
              <p className="text-gray-700">
                Your message has been sent successfully. We will get back to you
                soon.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
