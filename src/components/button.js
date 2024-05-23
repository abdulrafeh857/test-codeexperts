import React from 'react';

export default function Button({ onClick, text }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 hover:scale-105 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
