# Cartagena Fragmentada

Una aplicación web que fragmenta y reconstruye la experiencia de Cartagena de Indias, revelando sus historias ocultas y rincones secretos.

## 🚀 Características

- **Rendimiento optimizado**: Sin animaciones pesadas ni efectos innecesarios
- **Diseño responsivo**: Funciona perfectamente en dispositivos móviles y desktop
- **Navegación fluida**: Experiencia de usuario rápida y eficiente
- **Contenido rico**: Información detallada sobre sitios turísticos, historia, museos y más

## 🛠️ Tecnologías

- **Next.js 15.5.4** - Framework React con App Router
- **React 19.1.0** - Biblioteca de interfaz de usuario
- **Tailwind CSS 4** - Framework de CSS utilitario
- **Turbopack** - Bundler ultra-rápido para desarrollo
- **@react-google-maps/api** - Integración de Google Maps
- **Google Maps JavaScript API** - API de mapas de Google

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
# Crea un archivo .env.local en la raíz del proyecto con:
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🗺️ Configuración de Google Maps

Para que el mapa funcione correctamente, necesitas:

1. **Obtener una API Key de Google Maps:**
   - Ve a [Google Cloud Console](https://console.cloud.google.com/)
   - Crea un nuevo proyecto o selecciona uno existente
   - Habilita la API **Maps JavaScript API**
   - Crea una credencial (API Key)
   - Configura restricciones de dominio si es necesario

2. **Configurar la variable de entorno:**
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Agrega: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui`
   - Reinicia el servidor de desarrollo

**API utilizada:** `Maps JavaScript API` de Google Cloud Platform

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # Páginas de la aplicación
│   ├── inicio/            # Página principal
│   ├── historia/          # Página de historia
│   ├── sitios-turisticos/ # Sitios turísticos
│   ├── museos/            # Museos
│   ├── playas/            # Playas
│   ├── centros-comerciales/ # Centros comerciales
│   └── lugares-poco-conocidos/ # Lugares ocultos
├── components/            # Componentes reutilizables
│   └── ui/               # Componentes de interfaz
├── data/                 # Datos estáticos
└── hooks/               # Hooks personalizados
```

## 🎨 Optimizaciones Implementadas

- ✅ Eliminación de animaciones pesadas (bandera, iconos flotantes)
- ✅ Reducción de efectos parallax complejos
- ✅ Limpieza de dependencias no utilizadas
- ✅ Optimización de CSS y eliminación de keyframes innecesarios
- ✅ Estructura de archivos simplificada

## 🚀 Rendimiento

- **Carga inicial**: Optimizada para velocidad
- **Tamaño del bundle**: Reducido significativamente
- **Experiencia móvil**: Mejorada sin animaciones pesadas
- **SEO**: Optimizado para motores de búsqueda

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🌐 Despliegue

La aplicación está lista para desplegar en:
- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**
- **Cualquier plataforma que soporte Next.js**

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.