
import React from 'react';

const BusinessCards = () => {
  // Стандартные размеры визитки 90×50 мм (9×5 см)
  // На листе А4 (210×297 мм) можно разместить 12 визиток в сетке 3×4
  
  // Массив с 12 одинаковыми визитками
  const cards = Array(12).fill(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Макет визиток для печати</h1>
      <p className="mb-4">Формат А4, 12 визиток (сетка 3×4) размером 9×5 см</p>
      
      <button 
        onClick={() => window.print()} 
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Печать
      </button>
      
      {/* Контейнер для печати */}
      <div className="print-container">
        <div className="business-cards-sheet">
          {cards.map((_, index) => (
            <div key={index} className="business-card">
              <div className="business-card-content">
                <img 
                  src="https://cdn.poehali.dev/files/ea7df014-f77b-48eb-81e6-a541382dbb0c.png" 
                  alt="Логотип ВОССТАНОВЛЕНИЕ" 
                  className="business-card-logo"
                />
                <div className="business-card-contact">
                  <p>Адрес: г. Москва, ул. Примерная, 123</p>
                  <p>Тел: +7 (999) 123-45-67</p>
                  <p>Email: info@vosstanovlenie.ru</p>
                  <p>www.vosstanovlenie.ru</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media screen {
          .print-container {
            width: 210mm;
            height: 297mm;
            margin: 0 auto;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            background: white;
          }
        }
        
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          button, h1, p:not(.business-card-contact p) {
            display: none;
          }
          
          .print-container {
            width: 210mm;
            height: 297mm;
          }
        }
        
        .business-cards-sheet {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 0;
        }
        
        .business-card {
          border: 1px dashed #ccc;
          padding: 3mm;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .business-card-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        
        .business-card-logo {
          width: 80%;
          max-height: 60%;
          object-fit: contain;
        }
        
        .business-card-contact {
          width: 100%;
          text-align: center;
          font-size: 8pt;
          line-height: 1.2;
        }
        
        .business-card-contact p {
          margin: 2px 0;
          display: block !important;
        }
      `}</style>
    </div>
  );
};

export default BusinessCards;
