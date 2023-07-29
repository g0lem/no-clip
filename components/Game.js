//https://play2048.co/
import * as elements from 'typed-html';



export const Game = (props) => {
    return <div>
        <iframe src={props.src} title={props.title} style={"width: 100vw; height: 90vh"}></iframe>
    </div>
}