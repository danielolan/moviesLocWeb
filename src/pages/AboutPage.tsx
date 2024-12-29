import { MainLayout } from "../layouts/MainLayout";
import { FaReact, FaCloud, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="relative min-h-screen">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video className="object-cover w-full h-full" autoPlay muted loop>
            <source src="https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2024/01/26/1706274878-disney.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <div className="relative z-10 bg-transparent text-white min-h-screen flex flex-col justify-center items-center">
          <div className="container mx-auto px-4 py-8">
            {/* Introducción */}
            <section className="text-center my-8">
              <h2 className="text-4xl font-semibold mb-4">
                Bienvenido a MOVIESLOC WEB
              </h2>
              <p className="text-lg">
                Este proyecto es una aplicación web diseñada para proporcionar una experiencia intuitiva y visualmente atractiva en la exploración de películas y géneros.
              </p>
            </section>

            {/* Características */}
            <section className="my-8">
              <h3 className="text-3xl font-semibold mb-4">Características</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Exploración de películas populares con detalles específicos.</li>
                <li>Clasificación por géneros y funcionalidad de búsqueda eficiente.</li>
                <li>Agregar películas a favoritos y gestionarlas.</li>
                <li>Diseño responsivo para dispositivos móviles y de escritorio.</li>
              </ul>
            </section>

            {/* Tecnologías */}
            <section className="my-8">
              <h3 className="text-3xl font-semibold mb-4">Tecnologías Utilizadas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <FaReact size={40} className="text-blue-500" />
                  <span className="text-lg">React, TailwindCSS, React Router</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaCloud size={40} className="text-gray-500" />
                  <span className="text-lg">TMDb API, Context API</span>
                </div>
              </div>
            </section>

            {/* Instalación */}
            <section className="my-8">
              <h3 className="text-3xl font-semibold mb-4">Instalación</h3>
              <p className="text-lg mb-4">
                Para iniciar el proyecto localmente, sigue estos pasos:
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>
                  Clonar el repositorio:
                  <code className="bg-gray-800 text-yellow-500 p-1 rounded block mt-2">
                    git clone https://github.com/danielolan/moviesLocWeb.git
                  </code>
                </li>
                <li>
                  Cambiar al directorio del proyecto:
                  <code className="bg-gray-800 text-yellow-500 p-1 rounded block mt-2">
                    cd moviesLocWeb
                  </code>
                </li>
                <li>
                  Instalar dependencias:
                  <code className="bg-gray-800 text-yellow-500 p-1 rounded block mt-2">
                    npm install
                  </code>
                </li>
                <li>
                  Iniciar el servidor de desarrollo:
                  <code className="bg-gray-800 text-yellow-500 p-1 rounded block mt-2">
                    npm run dev
                  </code>
                </li>
              </ol>
            </section>

            {/* Contacto */}
            <section className="my-8">
              <h3 className="text-3xl font-semibold mb-4">Contacto</h3>
              <div className="flex flex-col items-center space-y-4">
                <p className="text-lg">
                  Para consultas o sugerencias, contáctanos:
                </p>
                <div className="flex space-x-6 items-center justify-center my-4">
                  <a
                    href="mailto:soporte@moviesloc.com"
                    className="flex items-center space-x-2 text-lg hover:text-yellow-500 transition"
                  >
                    <FaEnvelope size={30} className="text-yellow-500" />
                    <span>da-olano@hotmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daniel-andres-olano-casta%C3%B1eda-081035292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-lg hover:text-yellow-500 transition"
                  >
                    <FaLinkedin size={30} className="text-blue-500" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/danielolan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-lg hover:text-yellow-500 transition"
                  >
                    <FaGithub size={30} className="text-gray-500" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
