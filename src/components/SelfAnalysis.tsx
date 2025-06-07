import { lessonData } from "@/data/lessonData";
import { fgosLessonStages } from "@/data/lessonStages";
import { plannedResults, assessmentCriteria } from "@/data/plannedResults";
import Icon from "@/components/ui/icon";

const SelfAnalysis = () => {
  const totalActivities = Object.values(fgosLessonStages).reduce(
    (sum, stage) => sum + stage.activities.length,
    0,
  );

  const workTypeStats = {
    individual: 8,
    pair: 6,
    team: 7,
    frontal: 5,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Icon name="FileText" size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Самоанализ урока
              </h1>
              <p className="text-gray-600 text-lg">{lessonData.title}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-blue-900 mb-2">
                Класс и предмет
              </h3>
              <p className="text-blue-700">
                {lessonData.grade} • Английский язык
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-900 mb-2">Тип урока</h3>
              <p className="text-green-700">{lessonData.type}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="font-semibold text-purple-900 mb-2">
                Длительность
              </h3>
              <p className="text-purple-700">{lessonData.duration}</p>
            </div>
          </div>
        </div>

        {/* ФГОС Соответствие */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="CheckCircle" size={28} className="text-green-600" />
            Соответствие требованиям ФГОС
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Системно-деятельностный подход
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Target"
                    size={16}
                    className="text-green-600 mt-1"
                  />
                  <p className="text-gray-700 text-sm">
                    Учащиеся самостоятельно формулируют цели урока на
                    организационном этапе
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Users"
                    size={16}
                    className="text-green-600 mt-1"
                  />
                  <p className="text-gray-700 text-sm">
                    Активная познавательная деятельность через квесты и
                    интерактивные задания
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Brain"
                    size={16}
                    className="text-green-600 mt-1"
                  />
                  <p className="text-gray-700 text-sm">
                    Рефлексия и самооценка на заключительном этапе
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Формирование УУД
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Settings"
                    size={16}
                    className="text-blue-600 mt-1"
                  />
                  <p className="text-gray-700 text-sm">
                    Регулятивные: планирование, самоконтроль, коррекция
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Lightbulb"
                    size={16}
                    className="text-purple-600 mt-1"
                  />
                  <p className="text-gray-700 text-sm">
                    Познавательные: анализ, сравнение, классификация
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="MessageCircle"
                    size={16}
                    className="text-orange-600 mt-1"
                  />
                  <p className="text-gray-700 text-sm">
                    Коммуникативные: сотрудничество, диалог, аргументация
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Структура урока */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="Layout" size={28} className="text-blue-600" />
            Структурный анализ урока
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Этапы урока ({Object.keys(fgosLessonStages).length})
              </h3>
              <div className="space-y-3">
                {Object.entries(fgosLessonStages).map(([key, stage]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      {stage.title}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {stage.duration} • {stage.activities.length} активности
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Формы работы
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-900 font-medium">
                    👤 Индивидуальная
                  </span>
                  <span className="text-blue-700 font-semibold">
                    {workTypeStats.individual} активностей
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-green-900 font-medium">👫 Парная</span>
                  <span className="text-green-700 font-semibold">
                    {workTypeStats.pair} активностей
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-900 font-medium">
                    🏆 Командная
                  </span>
                  <span className="text-purple-700 font-semibold">
                    {workTypeStats.team} активностей
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-orange-900 font-medium">
                    👥 Фронтальная
                  </span>
                  <span className="text-orange-700 font-semibold">
                    {workTypeStats.frontal} активностей
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Анализ результатов */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="TrendingUp" size={28} className="text-green-600" />
            Достижение планируемых результатов
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Icon name="Book" size={20} />
                Предметные
              </h3>
              <p className="text-blue-800 text-sm mb-3">
                Освоение {lessonData.vocabulary.length} лексических единиц
              </p>
              <div className="bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <p className="text-blue-700 text-xs mt-2">90% выполнения</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <Icon name="Settings" size={20} />
                Метапредметные
              </h3>
              <p className="text-green-800 text-sm mb-3">
                Формирование всех групп УУД
              </p>
              <div className="bg-green-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-green-700 text-xs mt-2">85% выполнения</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <Icon name="Heart" size={20} />
                Личностные
              </h3>
              <p className="text-purple-800 text-sm mb-3">
                Воспитание ценностного отношения к образованию
              </p>
              <div className="bg-purple-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "88%" }}
                ></div>
              </div>
              <p className="text-purple-700 text-xs mt-2">88% выполнения</p>
            </div>
          </div>
        </div>

        {/* Инновационные методы */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="Zap" size={28} className="text-yellow-600" />
            Инновационные методы и технологии
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-2">
                  🎮 Геймификация
                </h4>
                <p className="text-yellow-800 text-sm">
                  Квест "Космическая школа", баллы за активности, командные
                  соревнования
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-semibold text-pink-900 mb-2">
                  📱 Цифровые технологии
                </h4>
                <p className="text-pink-800 text-sm">
                  Kahoot-викторина, QR-коды, планшеты, создание TikTok контента
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">
                  🎭 Ролевые игры
                </h4>
                <p className="text-green-800 text-sm">
                  Модный показ, цирк предметов, детективная игра, экскурсия для
                  новичков
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  🧩 Проблемное обучение
                </h4>
                <p className="text-blue-800 text-sm">
                  Решение головоломок, расшифровка кодов, поиск ошибок
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Выводы */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Icon name="Award" size={28} />
            Общие выводы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                ✅ Соответствие ФГОС:
              </h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Системно-деятельностный подход реализован</li>
                <li>• Все группы УУД сформированы</li>
                <li>• Разнообразие форм и методов работы</li>
                <li>• Использование ИКТ и инновационных технологий</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                🎯 Эффективность урока:
              </h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Высокая мотивация через игровые элементы</li>
                <li>• Активная деятельность всех учащихся</li>
                <li>• Практико-ориентированный характер заданий</li>
                <li>• Развитие всех видов речевой деятельности</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Краткий самоанализ урока */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Icon name="CheckSquare" size={28} className="text-indigo-600" />
            Краткий самоанализ урока
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                📋 Соответствие требованиям ФГОС
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm text-gray-700">
                      Системно-деятельностный подход реализован
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm text-gray-700">
                      Формирование всех групп УУД
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm text-gray-700">
                      Личностно-ориентированный подход
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm text-gray-700">
                      Компетентностный подход
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm text-gray-700">
                      Использование ИКТ и игровых технологий
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm text-gray-700">
                      Здоровьесберегающие технологии
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">
                🎯 Достижение поставленных целей
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">90%</div>
                  <div className="text-xs text-green-600">
                    Предметные результаты
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">85%</div>
                  <div className="text-xs text-green-600">
                    Метапредметные результаты
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">88%</div>
                  <div className="text-xs text-green-600">
                    Личностные результаты
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">
                💡 Ключевые особенности урока
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="mb-2">
                    <strong>Тип урока:</strong> Комбинированный урок открытия
                    нового знания
                  </p>
                  <p className="mb-2">
                    <strong>Структура:</strong> 7 этапов согласно ФГОС с
                    переходами
                  </p>
                  <p>
                    <strong>Формы работы:</strong> Индивидуальная, парная,
                    командная, фронтальная
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong>Технологии:</strong> Геймификация, ИКТ, проблемное
                    обучение
                  </p>
                  <p className="mb-2">
                    <strong>Мотивация:</strong> Игровые элементы, квест,
                    соревнования
                  </p>
                  <p>
                    <strong>Оценивание:</strong> Формирующее, критериальное,
                    peer-assessment
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">
                📊 Эффективность методов
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    Геймификация (квест, баллы, соревнования)
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-purple-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                    <span className="text-xs text-purple-700">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    ИКТ (Kahoot, TikTok, QR-коды)
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-blue-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                    <span className="text-xs text-blue-700">92%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    Активные методы (ролевые игры, проекты)
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-green-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                    <span className="text-xs text-green-700">89%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfAnalysis;
