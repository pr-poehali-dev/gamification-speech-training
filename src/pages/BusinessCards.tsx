
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BusinessCards = () => {
  const [activeColumn, setActiveColumn] = useState('left');
  
  // Массив с 6 визитками для каждого столбца
  const cards = Array(6).fill(null);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Макет визиток для печати</h1>
      <p className="mb-6 text-gray-600">Формат А4, 6 визиток в левом столбце и 6 в правом столбце</p>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={() => window.print()} 
          className="print:hidden"
        >
          Печать
        </Button>
        
        <div className="print:hidden">
          <Tabs defaultValue="left" value={activeColumn} onValueChange={setActiveColumn}>
            <TabsList>
              <TabsTrigger value="left">Левый столбец</TabsTrigger>
              <TabsTrigger value="right">Правый столбец</TabsTrigger>
              <TabsTrigger value="both">Оба столбца</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="print:hidden mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
        <h2 className="font-medium mb-2">Инструкция по печати:</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Выберите нужный столбец или оба столбца для печати</li>
          <li>Нажмите кнопку "Печать"</li>
          <li>Разрежьте лист по пунктирным линиям</li>
        </ol>
      </div>
      
      <Tabs defaultValue="left" value={activeColumn} className="print:hidden">
        <TabsContent value="left">
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
        <TabsContent value="right">
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
        <TabsContent value="both">
          <div className="business-cards-container-both">
            <div className="business-cards-sheet-both">
              <div className="business-cards-column">
                {cards.map((_, index) => (
                  <div key={`left-${index}`} className="business-card">
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
              <div className="business-cards-column">
                {cards.map((_, index) => (
                  <div key={`right-${index}`} className="business-card">
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
        </TabsContent>
      </Tabs>
      
      {/* При печати показываем активный столбец или оба столбца */}
      <div className="hidden print:block">
        {activeColumn === 'both' ? (
          <div className="business-cards-container-both">
            <div className="business-cards-sheet-both">
              <div className="business-cards-column">
                {cards.map((_, index) => (
                  <div key={`print-left-${index}`} className="business-card">
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
              <div className="business-cards-column">
                {cards.map((_, index) => (
                  <div key={`print-right-${index}`} className="business-card">
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
        ) : (
          <div className="business-cards-container">
            <div className="business-cards-sheet">
              {cards.map((_, index) => (
                <div key={`print-${index}`} className="business-card">
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
        )}
      </div>
      
      <style jsx global>{`
        @media screen {
          .business-cards-container {
            width: 105mm;
            min-height: 297mm;
            margin: 0 auto;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            background: white;
          }
          
          .business-cards-container-both {
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
            width: 105mm;
            height: 297mm;
            position: absolute;
            top: 0;
            left: 0;
          }
          
          .business-cards-container-both {
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
          grid-template-columns: 1fr;
          grid-template-rows: repeat(6, 1fr);
          gap: 0;
        }
        
        .business-cards-sheet-both {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          gap: 0;
        }
        
        .business-cards-column {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(6, 1fr);
          gap: 0;
          height: 100%;
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
          width: 85mm;
          height: 40mm;
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
