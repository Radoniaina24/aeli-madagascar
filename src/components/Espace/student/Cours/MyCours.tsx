import React, { useState } from "react";
import { FaFilePdf, FaVideo } from "react-icons/fa";
const courses = [
  {
    id: 1,
    title: "Mathématiques Avancées",
    description: "Cours complet sur le calcul différentiel et intégral",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20geometric%20shapes%20and%20formulas%20on%20a%20clean%20minimalist%20background%20with%20blue%20and%20yellow%20color%20accents%2C%20educational%20material%20for%20university%20students&width=400&height=225&seq=1&orientation=landscape",
    progress: 65,
    level: "Avancé",
    category: "Mathématiques",
    resources: { videos: 12, pdfs: 8, quizzes: 5 },
    estimatedTime: "24h",
    lastAccess: "21/04/2025",
    status: "en-cours",
  },
  {
    id: 2,
    title: "Physique Quantique",
    description:
      "Introduction aux principes fondamentaux de la physique quantique",
    image:
      "https://readdy.ai/api/search-image?query=Quantum%20physics%20educational%20material%20with%20atomic%20models%20and%20wave%20equations%20on%20a%20clean%20minimalist%20background%20with%20blue%20and%20yellow%20color%20accents%2C%20professional%20e-learning%20content&width=400&height=225&seq=2&orientation=landscape",
    progress: 30,
    level: "Expert",
    category: "Physique",
    resources: { videos: 15, pdfs: 10, quizzes: 7 },
    estimatedTime: "32h",
    lastAccess: "20/04/2025",
    status: "en-cours",
  },
  {
    id: 3,
    title: "Programmation Python",
    description:
      "Maîtrisez Python de zéro à héros avec des exercices pratiques",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20geometric%20shapes%20and%20formulas%20on%20a%20clean%20minimalist%20background%20with%20blue%20and%20yellow%20color%20accents%2C%20educational%20material%20for%20university%20students&width=400&height=225&seq=1&orientation=landscape",
    progress: 100,
    level: "Intermédiaire",
    category: "Informatique",
    resources: { videos: 20, pdfs: 15, quizzes: 10 },
    estimatedTime: "40h",
    lastAccess: "19/04/2025",
    status: "terminés",
  },
  {
    id: 4,
    title: "Anglais des Affaires",
    description:
      "Perfectionnez votre anglais professionnel pour le monde des affaires",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20geometric%20shapes%20and%20formulas%20on%20a%20clean%20minimalist%20background%20with%20blue%20and%20yellow%20color%20accents%2C%20educational%20material%20for%20university%20students&width=400&height=225&seq=1&orientation=landscape",
    progress: 85,
    level: "Intermédiaire",
    category: "Langues",
    resources: { videos: 18, pdfs: 12, quizzes: 8 },
    estimatedTime: "30h",
    lastAccess: "18/04/2025",
    status: "en-cours",
  },
  {
    id: 5,
    title: "Intelligence Artificielle",
    description: "Découvrez les fondements et applications de l'IA moderne",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20geometric%20shapes%20and%20formulas%20on%20a%20clean%20minimalist%20background%20with%20blue%20and%20yellow%20color%20accents%2C%20educational%20material%20for%20university%20students&width=400&height=225&seq=1&orientation=landscape",
    progress: 45,
    level: "Expert",
    category: "Informatique",
    resources: { videos: 25, pdfs: 18, quizzes: 12 },
    estimatedTime: "50h",
    lastAccess: "17/04/2025",
    status: "favoris",
  },
  {
    id: 6,
    title: "Chimie Organique",
    description: "Étude approfondie des composés organiques et leurs réactions",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20geometric%20shapes%20and%20formulas%20on%20a%20clean%20minimalist%20background%20with%20blue%20and%20yellow%20color%20accents%2C%20educational%20material%20for%20university%20students&width=400&height=225&seq=1&orientation=landscape",
    progress: 10,
    level: "Avancé",
    category: "Chimie",
    resources: { videos: 22, pdfs: 16, quizzes: 9 },
    estimatedTime: "45h",
    lastAccess: "16/04/2025",
    status: "recommandés",
  },
];
const categories = [
  "tous",
  "Mathématiques",
  "Physique",
  "Informatique",
  "Langues",
  "Chimie",
];
export default function MyCours() {
  const [activeFilter, setActiveFilter] = useState("tous");
  const filteredCourses = courses.filter((course) => {
    if (activeFilter === "tous") return true;
    return course.category === activeFilter;
  });
  return (
    <div className=" rounded-lg  p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Mes Cours{" "}
          <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
            ({filteredCourses.length})
          </span>
        </h2>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          <select
            className="bg-gray-100 dark:bg-gray-700 border-none rounded-lg py-2 px-3 text-sm cursor-pointer"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "tous" ? "Toutes les matières" : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-2 right-2">
                <span
                  className={`inline-block py-1 px-2 rounded-full text-xs font-semibold
${
  course.level === "Débutant"
    ? "bg-green-100 text-green-800"
    : course.level === "Intermédiaire"
    ? "bg-blue-100 text-blue-800"
    : "bg-purple-100 text-purple-800"
}`}
                >
                  {course.level}
                </span>
              </div>
              {course.status === "favoris" && (
                <div className="absolute top-2 left-2">
                  <span className="text-yellow-400">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center mb-1">
                <span
                  className={`w-3 h-3 rounded-full mr-2
${
  course.category === "Mathématiques"
    ? "bg-blue-500"
    : course.category === "Physique"
    ? "bg-purple-500"
    : course.category === "Informatique"
    ? "bg-green-500"
    : course.category === "Langues"
    ? "bg-yellow-500"
    : "bg-red-500"
}`}
                ></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {course.category}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1">{course.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs py-1 px-2 rounded-full flex items-center">
                  <FaVideo className="mr-1" />
                  {course.resources.videos} vidéos
                </span>
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs py-1 px-2 rounded-full flex items-center">
                  <FaFilePdf className="mr-1" />
                  {course.resources.pdfs} PDF
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span>
                  <i className="far fa-clock mr-1"></i> {course.estimatedTime}
                </span>
                <span>
                  <i className="far fa-calendar-alt mr-1"></i>{" "}
                  {course.lastAccess}
                </span>
              </div>
              <a href="#" data-readdy="true" className="block">
                <button className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-1 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-play-circle"></i>
                  <span>
                    {course.progress === 0
                      ? "Commencer"
                      : course.progress === 100
                      ? "Revoir"
                      : "Continuer"}
                  </span>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
