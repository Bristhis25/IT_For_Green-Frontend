import React from 'react';

const Modules = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800">Nos Modules</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Module 1 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center w-full sm:w-1/2 md:w-1/3">
            <div className="mb-4">
              <img
                src="/path/to/icon1.png" // Remplace par une icône pertinente
                alt="Module 1"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Module 1</h3>
            <p className="text-gray-600">Introduction à l'écologie numérique.</p>
          </div>

          {/* Module 2 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center w-full sm:w-1/2 md:w-1/3">
            <div className="mb-4">
              <img
                src="/path/to/icon2.png" // Remplace par une icône pertinente
                alt="Module 2"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Module 2</h3>
            <p className="text-gray-600">Apprendre à utiliser les outils écologiques.</p>
          </div>

          {/* Module 3 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center w-full sm:w-1/2 md:w-1/3">
            <div className="mb-4">
              <img
                src="/path/to/icon3.png" // Remplace par une icône pertinente
                alt="Module 3"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Module 3</h3>
            <p className="text-gray-600">Stratégies pour un avenir plus vert.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
