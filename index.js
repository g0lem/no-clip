import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';
import { staticPlugin } from '@elysiajs/static'

import { Game2048 } from './pages/2048/Game2048';
import { ClumsyBird } from './pages/ClumsyBird/ClumsyBird';
import { Hextris } from './pages/Hextris/Hextris';
import { Astray } from './pages/Astray/Astray';
import { Home } from './pages/Home/Home';
import { FreeCiv } from './pages/FreeCiv/FreeCiv';
import { AncientBeast } from './pages/AncientBeast/AncientBeast';
import { TowerGame } from './pages/LastColony/LastColony';


const port = 8080;

const app = new Elysia()
    .use(html())
    .use(staticPlugin())
    .get('/favicon.ico', () => Bun.file('public/favicon.ico'))
    .get('/', ({html})=> html(<Home/>))
    .get('/2048', ({html}) => html(<Game2048/>))
    .get('/clumsy-bird', ({html}) => html(<ClumsyBird/>))
    .get('/hextris', ({html}) => html(<Hextris/>))
    .get('/astray', ({html}) => html(<Astray/>))
    .get('/free-civ', ({html}) => html(<FreeCiv/>))
    .get('/ancient-beast', ({html}) => html(<AncientBeast/>))
    .get('/tower-game', ({html}) => html(<TowerGame/>))
    .listen(port)

console.log(`listening on port: http://localhost:${port}`)
