//https://play2048.co/
import * as elements from 'typed-html';
import { BasePage } from './BasePage';



export const Game = (props) => {
    return <BasePage>
        <h1>{props.title}</h1>
        <div class="DashedSeparator"></div>
        <div class='GameContainer'>
            <iframe src={props.src} title={props.title} id="gameIframe"></iframe>
            <div class="GameButtonsContainer">
                <img width='25' height='25' src="public/arrows-left-right-solid.svg" id="theatreMode"/>
                <img width='25' height='25' src="public/expand-solid.svg" id="maximizeGame"/>
            </div>
        </div>
        <link rel="stylesheet" href="public/game.css"/>
        <script src="public/scripts/game-container.js"/>
    </BasePage>
}