import { lessonData } from "@/data/lessonData";
import Icon from "@/components/ui/icon";

const LessonSelfAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Заголовок */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center">
              <Icon name="BookOpen" size={40} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Самоанализ урока
              </h1>
              <p className="text-xl text-gray-600">{lessonData.title}</p>
              <p className="text-lg text-gray-500">
                {lessonData.grade} • Английский язык
              </p>
            </div>
          </div>
        </div>

        {/* Общая характеристика урока */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="Target" size={24} className="text-indigo-600" />
            Общая характеристика урока
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h3 className="font-semibold text-indigo-900 mb-2">
                  Тип урока
                </h3>
                <p className="text-indigo-700">{lessonData.type}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">
                  Продолжительность
                </h3>
                <p className="text-green-700">{lessonData.duration}</p>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Цель урока</h3>
              <p className="text-purple-700 text-sm leading-relaxed">
                {lessonData.goal}
              </p>
            </div>
          </div>
        </div>

        {/* Анализ целей и задач */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="CheckCircle" size={24} className="text-green-600" />
            Достижение поставленных целей
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Icon name="BookOpen" size={20} />
                Практические задачи
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm text-blue-800">
                    Освоение лексики: 95%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm text-blue-800">
                    Навыки говорения: достигнуто
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm text-blue-800">
                    Диалогическая речь: развито
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <Icon name="Brain" size={20} />
                Развивающие задачи
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm text-green-800">
                    Регулятивные УУД
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm text-green-800">
                    Познавательные УУД
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm text-green-800">
                    Коммуникативные УУД
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-xl">
              <h3 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                <Icon name="Heart" size={20} />
                Воспитательные задачи
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm text-purple-800">
                    Ценность образования
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm text-purple-800">
                    Уважение к правилам
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm text-purple-800">
                    Культура общения
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Методический анализ */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="Settings" size={24} className="text-orange-600" />
            Методический анализ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Использованные методы
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg flex items-center gap-3">
                  <Icon name="Users" size={18} className="text-orange-600" />
                  <span className="text-orange-800">
                    Коммуникативный подход
                  </span>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg flex items-center gap-3">
                  <Icon
                    name="MessageCircle"
                    size={18}
                    className="text-blue-600"
                  />
                  <span className="text-blue-800">Интерактивные методы</span>
                </div>
                <div className="p-3 bg-green-50 rounded-lg flex items-center gap-3">
                  <Icon name="Gamepad2" size={18} className="text-green-600" />
                  <span className="text-green-800">Игровые технологии</span>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg flex items-center gap-3">
                  <Icon name="Laptop" size={18} className="text-purple-600" />
                  <span className="text-purple-800">ИКТ-технологии</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Формы работы
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Фронтальная работа</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Парная работа</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Групповая работа</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Индивидуальная</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Анализ эффективности */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="TrendingUp" size={24} className="text-green-600" />
            Оценка эффективности урока
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">87%</span>
              </div>
              <h3 className="font-bold text-green-900">
                Вовлеченность учащихся
              </h3>
              <p className="text-green-700 text-sm mt-2">
                Высокий уровень активности
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">92%</span>
              </div>
              <h3 className="font-bold text-blue-900">Достижение целей</h3>
              <p className="text-blue-700 text-sm mt-2">
                Цели урока достигнуты
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">89%</span>
              </div>
              <h3 className="font-bold text-purple-900">Качество усвоения</h3>
              <p className="text-purple-700 text-sm mt-2">
                Материал усвоен хорошо
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">
              Что получилось особенно хорошо:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="text-green-600 mt-1 flex-shrink-0"
                />
                <span>
                  Эффективное использование интерактивных методов повысило
                  мотивацию учащихся
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="text-green-600 mt-1 flex-shrink-0"
                />
                <span>
                  Разнообразие форм работы позволило учесть индивидуальные
                  особенности учащихся
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="text-green-600 mt-1 flex-shrink-0"
                />
                <span>
                  Практико-ориентированные задания обеспечили применение знаний
                  в реальных ситуациях
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Рекомендации */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="Lightbulb" size={24} className="text-yellow-600" />
            Рекомендации для дальнейшей работы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-yellow-50 rounded-xl">
              <h3 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
                <Icon name="AlertTriangle" size={20} />
                Области для улучшения
              </h3>
              <ul className="space-y-2 text-yellow-800 text-sm">
                <li>• Увеличить время на отработку произношения новых слов</li>
                <li>• Добавить больше заданий на развитие письменной речи</li>
                <li>• Усилить дифференцированный подход к слабым учащимся</li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <Icon name="Target" size={20} />
                Планы на следующий урок
              </h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Закрепить изученную лексику через творческие задания</li>
                <li>
                  • Развивать навыки аудирования с новыми аутентичными текстами
                </li>
                <li>• Провести контроль усвоения материала через мини-тест</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonSelfAnalysis;
