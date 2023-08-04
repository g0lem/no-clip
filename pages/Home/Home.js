
import * as elements from 'typed-html';
import { GameTile } from '../../components/GameTile';
import { NavBar } from '../../components/NavBar';
import { BasePage } from '../../components/BasePage';
import { ExternalGamesDB } from '../../constants/MockGameDB';

export const Home = (props) => {
    return <BasePage>
        <div class='GameList'>
        {
            ExternalGamesDB.map(elm=><GameTile {...elm}/>)
        }
        </div>
    </BasePage>
}