# Crypto Dashboard Dinametra

Un dashboard interactivo que visualiza datos en tiempo real de criptomonedas utilizando la API pública de CoinGecko.

## Características

- **Visualización de Datos:** Gráficos de línea para precios y de barras para volumen de mercado usando `Chart.js` y `react-chartjs-2`.
- **Filtros Dinámicos:** Selector para consultar el Top 10, Top 25, o Top 50 de criptomonedas.
- **Diseño Responsivo:** Creado íntegramente con **Tailwind CSS**. Presenta un moderno estilo *Glassmorphism* y Dark Mode.
- **Calidad del Código y Arquitectura:** Estructura modular, separando responsabilidades vía Custom Hooks para *data-fetching*, servicios para la API, y componentes UI presentacionales puros.
- **Accesibilidad:** Uso de directivas ARIA para el uso conveniente mediante lectores de pantalla y navegación por teclado.
- **Testing:** Entorno configurado con Vitest y React Testing Library garantizando la renderización y funcionamiento correcto de los componentes críticos.

## Instrucciones de Instalación

1. Clonar el repositorio.
2. Asegurar que tienes Node.js instalado.
3. Instalar las dependencias en la raíz del proyecto:
   ```bash
   npm install
   ```
4. Levantar el servidor de desarrollo Vite:
   ```bash
   npm run dev
   ```

## Capturas de Pantalla

*(Nota para el usuario: Guarda las capturas de imagen de tu dashboard en la carpeta `public/screenshots` con los nombres indicados abajo, una vez lo subas a GitHub)*

- ![Carga Inicial](./public/screenshots/1-carga-inicial.png)
- ![Filtros Aplicados](./public/screenshots/2-filtros.png)
- ![Uso en Dispositivo Móvil](./public/screenshots/3-movil.png)

## Ejecución de Pruebas

Para correr las pruebas unitarias usando Vitest:
```bash
npm run test
```

## Enfoque Adoptado

- **Gestión de Estado y Ciclo de Vida**: Se utiliza un Custom Hook (`useCryptoData`) dedicado a la obtención de datos para evitar re-renderizaciones innecesarias. Se añadió el patrón `isMounted` en el hook local para evitar fugas de memoria o actualizaciones de estado después de que un componente haya sido desmontado. 
- **Optimización y Prevención de Errores (CoinCap API)**: Se migró de CoinGecko a **CoinCap API** para evitar errores 429 y 403 (Forbidden) comunes en despliegues de Vercel. Se implementó un mapeo de datos en la capa de servicio para mantener la consistencia en los componentes visuales.
- **Componentes Ciegos (*Dumb Components*)**: Los componentes `ChartPrice` y `ChartVolume` se transformaron en componentes de presentación que reciben toda su data por "props", y delegan la lógica de *fetch* al `Dashboard` que actúa como contenedor principal. Esto mejora mucho el rendimiento. Además utilizan funciones nativas de JS (`Intl.NumberFormat`) para formatear los números gigantes en monedas y billones entendibles.
- **Herramientas Modernas**: Vite sobre React para rapidez al codificar, renderizado responsivo con **Tailwind CSS v4** mediante clases utilitarias aplicando *Glassmorphism*, y reemplazo del entorno antiguo de Jest por **Vitest + React Testing Library** interactuando directamente sobre simulaciones del DOM de usuario.

## Posibles Mejoras a Futuro
- Manejar la paginación para expandir infinitamente la cantidad de datos que provee la API libre de CoinGecko de forma optimizada.
- Internacionalización (i18n).
