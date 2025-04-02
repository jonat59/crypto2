// La route API [ex: http://localhost:8000]
const apiUrl = 'https://api.rawg.io/api';

// fonction asynchrone
// si Async mettre await dans le traitement
// ex route => /blog
// options => { Accept: 'application/json' }
/**
 *
 * @param {string} route
 * @param {object} options
 * @returns  {Promise}
 */
export async function fetchData({ route, options = {} }) {
  // Préparation de l'entête 'headers' avec les clés - valeurs nécessaire pour
  // l'appel [ Authorization: 'Bearer qsgfjhF8768768678QSJFDHQjhjèçèçè_èvcV ]
  const headers = { Accept: 'application/json', ...options.headers };
  // appel methode native fetch [ appels API ]
  const result = await fetch(`${apiUrl}${route}`, { ...options, headers });

  if (result.ok) {
    return result.json();
  }
  throw new Error('Erreur serveur', { cause: result });
}
