export const HIGHLIGHT_PROVIDER_OPTIONS = {
  coreLibraryLoader: () => import('highlight.js/lib/core'),
  languages: {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
    bash: () => import('highlight.js/lib/languages/bash'),
  },
  themePath:
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/vs2015.min.css',
};
