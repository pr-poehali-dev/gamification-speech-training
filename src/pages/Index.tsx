// Update this page (the content is just a fallback if you fail to update the page)

import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 color-black text-black">
          Добро пожаловать!
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Выберите инструмент для работы
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="/business-cards"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64"
          >
            Печать визиток
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
