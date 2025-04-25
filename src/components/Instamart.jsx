import React from "react";
const Instamart = () => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md shadow-md max-w-xl mx-auto mt-6">
      <div className="flex items-center gap-3">
        <svg
          className="w-6 h-6 text-yellow-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
          />
        </svg>
        <div>
          <p className="font-semibold">Coming Soon</p>
          <p className="text-md">
            We are currently working on this feature. It will be available
            soon...
          </p>
          <p className="text-sm">
            If you have any concern/suggestion , please feel free to send Email
            over "rajeshcse1721@gmail.com"😊 <br />
            THANK YOU.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instamart;
