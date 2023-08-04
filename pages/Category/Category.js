
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
        </div>
    </BasePage>
}


const hasCategory = (elm, category) => elm?.categories?.includes(category);

const isCasual = (elm) => hasCategory(elm, GameCategories.Casual);
const isAdventure = (elm) => hasCategory(elm, GameCategories.Adventure);
const isAction = (elm) => hasCategory(elm, GameCategories.Action);


export const CasualCategory = (props) => <Category {...props} gameFilterFunction={isCasual}/> 
export const AdventureCategory = (props) => <Category {...props} gameFilterFunction={isAdventure}/> 
export const ActionCategory = (props) => <Category {...props} gameFilterFunction={isAction}/> 
