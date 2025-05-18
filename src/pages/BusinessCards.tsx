
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BusinessCards = () => {
  const [activeSide, setActiveSide] = useState('front');
  
  // Массив с 6 визитками для каждой стороны
  const cards = Array(6).fill(null);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Макет визиток для печати</h1>
      <p className="mb-6 text-gray-600">Формат А4, 6 визиток на каждой стороне листа (сетка 3×2)</p>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={() => window.print()} 
          className="print:hidden"
        >
          Печать текущей стороны
        </Button>
        
        <div className="print:hidden">
          <Tabs defaultValue="front" value={activeSide} onValueChange={setActiveSide}>
            <TabsList>
              <TabsTrigger value="front">Лицевая сторона</TabsTrigger>
              <TabsTrigger value="back">Обратная сторона</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="print:hidden mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
        <h2 className="font-medium mb-2">Инструкция по печати:</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Выберите и распечатайте сначала лицевую сторону</li>
          <li>Переверните лист согласно инструкции вашего принтера</li>
          <li>Выберите и распечатайте обратную сторону</li>
          <li>Разрежьте лист по пунктирным линиям</li>
        </ol>
      </div>
      
      <Tabs defaultValue="front" value={activeSide} className="print:hidden">
        <TabsContent value="front">
          <div className="business-cards-container">
            <div className="business-cards-sheet">
              {cards.map((_, index) => (
                <div key={index} className="business-card">
                  <div className="business-card-content">
                    <img 
                      src="https://cdn.poehali.dev/files/ea7df014-f77b-48eb-81e6-a541382dbb0c.png" 
                      alt="Логотип ВОССТАНОВЛЕНИЕ" 
                      className="business-card-logo"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="back">
          <div className="business-cards-container">
            <div className="business-cards-sheet">
              {cards.map((_, index) => (
                <div key={index} className="business-card">
                  <div className="business-card-content">
                    <img 
                      src="https://cdn.poehali.dev/files/ea7df014-f77b-48eb-81e6-a541382dbb0c.png" 
                      alt="Логотип ВОССТАНОВЛЕНИЕ" 
                      className="business-card-logo"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* При печати показываем только активную сторону */}
      <div className="hidden print:block">
        <div className="business-cards-container">
          <div className="business-cards-sheet">
            {cards.map((_, index) => (
              <div key={index} className="business-card">
                <div className="business-card-content">
                  <img 
                    src="https://cdn.poehali.dev/files/ea7df014-f77b-48eb-81e6-a541382dbb0c.png" 
                    alt="Логотип ВОССТАНОВЛЕНИЕ" 
                    className="business-card-logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @media screen {
          .business-cards-container {
            width: 210mm;
            min-height: 297mm;
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
          
          .print\\:hidden {
            display: none !important;
          }
          
          .business-cards-container {
            width: 210mm;
            height: 297mm;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        
        .business-cards-sheet {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 0;
        }
        
        .business-card {
          border: 1px dashed #ccc;
          padding: 5mm;
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
          justify-content: center;
        }
        
        .business-card-logo {
          width: 85%;
          max-height: 85%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default BusinessCards;
