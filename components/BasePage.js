//https://play2048.co/
import * as elements from 'typed-html';
import { NavBar } from './NavBar';



export const BasePage = ({children}) => {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="/public/home.css"/>
                <link rel="stylesheet" href="/public/game.css"/>
                <link rel="stylesheet" href="/public/logo.css"/>


                <meta property="og:title" content=".no-clip" />
                <meta property="og:type" content="website:game" />
                <meta property="og:url" content="https://no-clip.io/" />
                <meta property="og:image" content="https://no-clip.io/public/preview.png" />
                <meta property="og:description" content="Reproducing flash era nostalgia with new and improved technology since 2023"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            
            <body>
                <div class='Homepage'>
                    <NavBar/>
                    {children}
                </div>  
            </body>

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-S3LHH1FWKH"></script>
            <script src="public/scripts/google-analytics.js"/>

        </html>
)
}