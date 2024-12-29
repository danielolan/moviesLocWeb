# MOVIESLOC WEB

**MOVIESLOC WEB** es una aplicación web desarrollada con **React**, diseñada para ofrecer una experiencia interactiva e intuitiva en la exploración de películas populares, géneros, y detalles de películas. Este proyecto utiliza la API de The Movie Database (TMDb) para obtener datos dinámicos y actualizados sobre películas.

---

## 🌟 Características

- **Exploración de Películas Populares:** Lista dinámica de las películas más populares.
- **Clasificación por Géneros:** Permite navegar y filtrar películas según sus géneros.
- **Sistema de Favoritos:** Posibilidad de guardar y gestionar tus películas favoritas.
- **Detalles de Películas:** Información completa de cada película, incluyendo presupuesto, ingresos, compañías productoras y más.
- **Diseño Responsivo:** Optimizado para móviles, tabletas y pantallas grandes.
- **Optimización SEO:** Uso de `react-helmet-async` para generar meta tags dinámicos.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React**
- **React Router**
- **Context API**
- **TailwindCSS**
- **Axios**

### API
- **The Movie Database (TMDb):**
  - Para obtener datos dinámicos sobre películas y géneros.

### Otras Herramientas
- **Vite** para la construcción del proyecto.
- **React Icons** para iconografía.
- **Vercel** para despliegue en producción.

---

## 📦 Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clona el Repositorio:**
   ```bash
   git clone https://github.com/danielolan/moviesLocWeb.git
   ```

2. **Cambia al Directorio del Proyecto:**
   ```bash
   cd moviesloc-web
   ```

3. **Instala las Dependencias:**
   ```bash
   npm install
   ```

4. **Configura las Variables de Entorno:**
   - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
     ```env
     VITE_API_KEY=YOUR_TMDB_API_KEY
     ```

5. **Inicia el Servidor de Desarrollo:**
   ```bash
   npm run dev
   ```

6. **Abre el Navegador:**
   - Navega a `http://localhost:3000`.

---

## 🚀 Despliegue en Producción

El proyecto está desplegado en **Vercel**. Puedes acceder a la versión en producción aquí:

[https://moviesloc.vercel.app](https://moviesloc.vercel.app)

---

## 📚 Estructura del Proyecto

```plaintext
moviesloc-web/
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── context/            # Context API para manejar estados globales
│   ├── layouts/            # Diseños base como MainLayout
│   ├── pages/              # Páginas principales (Home, Movies, About, etc.)
│   ├── styles/             # Archivos CSS/Tailwind personalizados
│   ├── App.tsx             # Punto de entrada principal
│   └── main.tsx            # Configuración de Vite
├── public/                 # Recursos públicos (imágenes, videos, etc.)
├── vite.config.ts          # Configuración de Vite
└── package.json            # Configuración de dependencias y scripts
```

---

## 🌐 Funcionalidades

### Home
- Película destacada seleccionada aleatoriamente con su imagen y descripción.
- Carrusel de películas populares con navegación intuitiva.

### Movies
- Filtro por géneros para explorar películas clasificadas.
- Búsqueda dinámica de películas por título.

### Movie Details
- Página específica de cada película con información detallada:
  - Título, sinopsis, géneros, compañías productoras, ingresos, presupuesto y más.
  - Botón para guardar en favoritos y enlace al sitio oficial.

### Favorites
- Sección para gestionar las películas guardadas como favoritas.

### About
- Información detallada del proyecto, tecnologías utilizadas y contacto.


## 📞 Contacto

Para consultas, soporte o sugerencias:

- **Email:** da-olano@hotmail.com
- **LinkedIn:** [https://www.linkedin.com/in/daniel-andres-olano-casta%C3%B1eda-081035292/](https://www.linkedin.com/in/daniel-andres-olano-casta%C3%B1eda-081035292/)
- **GitHub:** [https://github.com/danielolan](https://github.com/danielolan)

---

¡Gracias por visitar MOVIESLOC WEB! 🎥🍿
