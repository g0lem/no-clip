
import * as elements from 'typed-html';
import { GameTile } from '../../components/GameTile';
import { NavBar } from '../../components/NavBar';
import { BasePage } from '../../components/BasePage';


const gameList = [
    {
        name: '2048',
        path: '/2048',
        imagePreview: 'https://superdevresources.com/wp-content/uploads/2014/09/2048-open-source-game.png'
    },
    {
        name: 'Clumsy Bird',
        path: '/clumsy-bird',
        imagePreview: 'https://superdevresources.com/wp-content/uploads/2014/09/clumsy-bird-open-source-game.png'
    },
    {
        name: 'Hextris',
        path: '/hextris',
        imagePreview: 'https://superdevresources.com/wp-content/uploads/2014/09/hextris-open-source-web-game.png'
    },
    {
        name: 'Astray',
        path: '/astray',
        imagePreview: 'https://superdevresources.com/wp-content/uploads/2014/09/astray-webgl-maze-game-open-source.jpg'
    },
]


export const Home = (props) => {
    return <BasePage>
        <div class='GameList'>
        {
            gameList.map(elm=><GameTile {...elm}/>)
        }
        </div>
    </BasePage>
}