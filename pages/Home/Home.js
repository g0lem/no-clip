
import * as elements from 'typed-html';
import { GameTile } from '../../components/GameTile';
import { BasePage } from '../../components/BasePage';
import { ExternalGamesDB } from '../../constants/MockGameDB';

export const Home = (props) => {
    return <BasePage>
        <title>.no-clip</title>
        <div class='GameList'>
        {
            ExternalGamesDB.map(elm=><GameTile {...elm}/>)
        }
        </div>
    </BasePage>
}