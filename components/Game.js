//https://play2048.co/
import * as elements from 'typed-html';
import { BasePage } from './BasePage';



export const Game = (props) => {
    return <BasePage>
        <iframe src={props.src} title={props.title} style={"width: 100vw; height: 90vh"}></iframe>
    </BasePage>
}