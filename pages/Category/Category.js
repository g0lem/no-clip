
import * as elements from 'typed-html';
import { GameTile } from '../../components/GameTile';
import { BasePage } from '../../components/BasePage';
import { ExternalGamesDB, GameCategories } from '../../constants/MockGameDB';

export const Category = (props) => {
    return <BasePage>
        <div class='GameList'>
        {
            ExternalGamesDB.filter(props.gameFilterFunction).map(elm=><GameTile {...elm}/>)
        }
        <div>
            <h1>{props.category}</h1>
            <div class="DashedSeparator"></div>
        </div>

        </div>
        <link rel="stylesheet" href="/public/game.css"/>
    </BasePage>
}


const hasCategory = (elm, category) => elm?.categories?.includes(category);

const isCasual = (elm) => hasCategory(elm, GameCategories.Casual);
const isAdventure = (elm) => hasCategory(elm, GameCategories.Adventure);
const isAction = (elm) => hasCategory(elm, GameCategories.Action);


export const CasualCategory = (props) => <Category {...props} gameFilterFunction={isCasual} category={GameCategories.Casual}/> 
export const AdventureCategory = (props) => <Category {...props} gameFilterFunction={isAdventure} category={GameCategories.Adventure}/> 
export const ActionCategory = (props) => <Category {...props} gameFilterFunction={isAction} category={GameCategories.Action}/> 
