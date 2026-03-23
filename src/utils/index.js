/**
 * Page URL utilities - converts page names to React Router paths
 */

const PAGE_ROUTES = {
  'Home': '/',
  'QuoteFlow': '/quote',
};

export function createPageUrl(pageName) {
  return PAGE_ROUTES[pageName] || '/' + pageName.toLowerCase().replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}
