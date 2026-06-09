import React from 'react';

const AbhiGPTApp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDFBF7] p-4">
      {/* लोगो और नाम */}
      <div className="text-center mb-8">
        <img src="1000096067.png" alt="Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">AbhiGPT</h1>
        <p className="text-gray-500 mt-2">नमस्ते! मैं AbhiGPT हूँ। मैं आपकी कैसे मदद कर सकता हूँ?</p>
        <p className="text-xs text-gray-400 mt-1 italic">Developed by Abinash</p>
      </div>

      {/* 4 बटन्स का ग्रिड */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
        <button className="p-4 bg-white border border-orange-200 rounded-xl hover:shadow-md transition">
          भारत की राजधानी क्या है?
        </button>
        <button className="p-4 bg-white border border-orange-200 rounded-xl hover:shadow-md transition">
          मुझे एक मजेदार कहानी सुनाओ।
        </button>
        <button className="p-4 bg-white border border-orange-200 rounded-xl hover:shadow-md transition">
          आज का मौसम कैसा होगा?
        </button>
        <button className="p-4 bg-white border border-orange-200 rounded-xl hover:shadow-md transition">
          खेती के बारे में बताएं?
        </button>
      </div>

      {/* चैट इनपुट एरिया */}
      <div className="w-full max-w-md flex items-center border border-orange-200 rounded-full p-2 bg-white shadow-sm">
        <input
          type="text"
          placeholder="यहाँ लिखें..."
          className="flex-grow px-4 py-2 outline-none bg-transparent"
        />
        <button className="p-3 bg-orange-300 rounded-full text-white">➤</button>
      </div>
    </div>
  );
};

export default AbhiGPTApp;
