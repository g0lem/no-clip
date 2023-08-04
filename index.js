import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';
import { staticPlugin } from '@elysiajs/static'
import { Home } from './pages/Home/Home';
import { ExternalGamesDB } from './constants/MockGameDB';
import { Game } from './components/Game';


const port = 8080;

const app = new Elysia()
    .use(html())
    .use(staticPlugin())
    .get('/favicon.ico', () => Bun.file('public/favicon.ico'))
    .get('/', ({html})=> html(<Home/>))

ExternalGamesDB.forEach(elm=>{
    const {
        path,
        name, 
        src,
    } = elm;
    app.get(path, ({html}) => html(<Game src={src} title={name}/>));
});


app.listen(port);

console.log(`listening on port: http://localhost:${port}`)
