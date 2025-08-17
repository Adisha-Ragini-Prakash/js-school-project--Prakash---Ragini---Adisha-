{
  "type": "module",
  "scripts": {
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
npm install
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "strict": true,
    "outDir": "dist",
    "rootDir": "src"
  }
}
export type EventData = { id: number; title: string };
export const fetchEvents = async () =>
  Promise.resolve([{ id: 1, title: 'Event' }]);
export const renderEvents = (events: { title: string }[]) =>
  (document.getElementById('app')!.innerHTML = events.map(e => <p>${e.title}</p>).join(''));
import { fetchEvents } from './fetcher.js';
import { renderEvents } from './renderer.js';

fetchEvents().then(renderEvents);
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="./dist/index.js"></script>
  </body>
</html>