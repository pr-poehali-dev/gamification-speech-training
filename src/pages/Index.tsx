// Update this page (the content is just a fallback if you fail to update the page)

import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 color-black text-black">
          Добро пожаловать!
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          тут будет отображаться ваш проект
        </p>
        <a
          href="/business-cards"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Открыть макет визиток
        </a>
        <a
          href="/lesson-plan"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Технологическая карта урока
        </a>
      </div>
    </div>
  );
};

export default Index;
