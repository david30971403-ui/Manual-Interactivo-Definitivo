# Manual Interactivo U.E.E "Jorge Semidey"

Este proyecto es una guía interactiva sobre mantenimiento preventivo y correctivo para los equipos de la Unidad Educativa Estatal Jorge Semidey.

## Estructura del Proyecto

El código fuente se encuentra en la carpeta `src/`:
- `components/`: Componentes reutilizables (Botones, Modales, Imágenes).
- `views/`: Vistas principales de la aplicación (Inicio, Comunidad, Hardware, etc.).
- `data/`: Datos estáticos (Fichas técnicas).
- `utils/`: Utilidades y configuraciones.

## Despliegue en GitHub Pages

Este proyecto está optimizado para ser desplegado en GitHub Pages.

### Pasos para desplegar:

1.  **Subir el código a GitHub:**
    Crea un repositorio en GitHub y sube todos los archivos.

2.  **Configuración de GitHub Pages:**
    - Ve a la pestaña **Settings** (Configuración) de tu repositorio.
    - Ve a la sección **Pages** (Páginas) en el menú lateral.
    - En **Source**, selecciona **GitHub Actions**.
    - O si prefieres usar la rama `gh-pages` manualmente:
        - Ejecuta `npm run build` en tu computadora.
        - Sube el contenido de la carpeta `dist` a una rama llamada `gh-pages`.
    
    **Método Recomendado (Automático con GitHub Actions):**
    Crea un archivo en `.github/workflows/deploy.yml` con el siguiente contenido:

    ```yaml
    name: Deploy to GitHub Pages

    on:
      push:
        branches: [ main ]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v3
          - uses: actions/setup-node@v3
            with:
              node-version: 18
          - run: npm install
          - run: npm run build
          - uses: actions/upload-pages-artifact@v1
            with:
              path: dist

      deploy:
        needs: build
        permissions:
          pages: write
          id-token: write
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v1
    ```

3.  **Verifica `vite.config.ts`:**
    Asegúrate de que `base: './'` esté configurado (ya lo hemos hecho por ti).

## Instalación Local

1.  Clona el repositorio.
2.  Ejecuta `npm install`.
3.  Ejecuta `npm run dev` para iniciar el servidor de desarrollo.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS (vía CDN)
