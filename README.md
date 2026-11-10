# Portafolio · David Graciano

Sitio personal de David Graciano, ingeniero de software en datos e IA aplicada (Medellín, Colombia).
Bilingüe (español e inglés), estático y construido con [Astro](https://astro.build). Se despliega en Vercel.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Estructura

| Ruta | Qué hay |
| --- | --- |
| `src/data/site.ts` | Todo el contenido: textos ES/EN, casos de estudio, experiencia, stack, formación |
| `src/components/Home.astro` | Página principal |
| `src/components/CaseStudy.astro` | Plantilla de cada caso de estudio |
| `src/layouts/Base.astro` | Cabecera, pie, SEO, cambio de idioma y de tema |
| `src/styles/global.css` | Tokens de la marca (tema Grafito y Claro) y estilos |
| `public/` | Foto, favicon, imagen para redes |

Para agregar un caso de estudio, añade un objeto a `cases` en `src/data/site.ts` con su versión en español e inglés.

## Despliegue

Vercel detecta Astro solo: comando de build `npm run build`, carpeta de salida `dist`. Cada push a `main` publica una nueva versión.

## Licencia

El código es MIT. Los textos, la fotografía y la marca son de David Graciano.
