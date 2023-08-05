//https://play2048.co/
import * as elements from 'typed-html';
import { NavBar } from './NavBar';



export const BasePage = ({children}) => {
    return (
        <html>
            <head>
                <title>.no-clip</title>
                <link rel="stylesheet" href="/public/home.css"/>
                <link rel="stylesheet" href="/public/game.css"/>
                <link rel="stylesheet" href="/public/logo.css"/>


                <meta property="og:title" content=".no-clip" />
                <meta property="og:type" content="website:game" />
                <meta property="og:url" content="https://no-clip.io/" />
                <meta property="og:image" content="https://no-clip.io/public/preview.png" />
            </head>
            
            <body>
                <div class='Homepage'>
                    <NavBar/>
                    {children}
                </div>  
            </body>
        </html>
)
}