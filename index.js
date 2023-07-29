import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';
import { Game2048 } from './pages/2048/Game2048';
import { ClumsyBird } from './pages/ClumsyBird/ClumsyBird';
import { Hextris } from './pages/Hextris/Hextris';
import { Astray } from './pages/Astray/Astray';
import { Home } from './pages/Home/Home';


const port = 8080;

const app = new Elysia()
    .use(html())
    .get('/', ({html})=> html(<Home/>))
    .get('/2048', ({html}) => html(<Game2048/>))
    .get('/clumsy-bird', ({html}) => html(<ClumsyBird/>))
    .get('/hextris', ({html}) => html(<Hextris/>))
    .get('/astray', ({html}) => html(<Astray/>))
    .listen(port)

console.log(`listening on port: ${port}`)
