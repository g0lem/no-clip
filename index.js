import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';
import { staticPlugin } from '@elysiajs/static'

import { Game2048 } from './pages/Games/2048/Game2048';
import { ClumsyBird } from './pages/Games/ClumsyBird/ClumsyBird';
import { Hextris } from './pages/Games/Hextris/Hextris';
import { Astray } from './pages/Games/Astray/Astray';
import { Home } from './pages/Home/Home';
import { FreeCiv } from './pages/Games/FreeCiv/FreeCiv';
import { AncientBeast } from './pages/Games/AncientBeast/AncientBeast';
import { TowerGame } from './pages/Games/TowerGame/TowerGame';
import { InfiniteMario } from './pages/Games/InfiniteMario/InfiniteMario';
import { DuckHunt } from './pages/Games/DuckHunt/DuckHunt';
import { SpaceBlockInvaders } from './pages/Games/SpaceBlockInvaders/SpaceBlockInvaders';
import { QuakeOneKThree } from './pages/Games/Q1K3/QuakeOneKThree';


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
    .get('/infinite-mario', ({html}) => html(<InfiniteMario/>))
    .get('/duck-hunt', ({html}) => html(<DuckHunt/>))
    .get('/space-block-invaders', ({html}) => html(<SpaceBlockInvaders/>))
    .get('/q1k3', ({html}) => html(<QuakeOneKThree/>))
    .listen(port)

console.log(`listening on port: http://localhost:${port}`)
