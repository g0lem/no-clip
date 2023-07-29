
import * as elements from 'typed-html';

// .get('/2048', ({html}) => html(<Game2048/>))
// .get('/clumsy-bird', ({html}) => html(<ClumsyBird/>))
// .get('/hextris', ({html}) => html(<Hextris/>))
// .get('/astray', ({html}) => html(<Astray/>))


export const Home = (props) => {
    return <div>
        <div>
            <a href='/2048'>2048</a>
        </div>
        <div>
            <a href='/clumsy-bird'>ClumsyBird</a>
        </div>

        <div>
            <a href='/hextris'>Hextris</a>
        </div>

        <div>
            <a href='/astray'>Astray</a>
        </div>
    </div>
}