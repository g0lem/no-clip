//https://play2048.co/
import * as elements from 'typed-html';
import { NavBar } from './NavBar';



export const BasePage = ({children}) => {
    return <div class='Homepage'>
    <NavBar/>
    {children}
    <link rel="stylesheet" href="public/home.css"/>
</div>
}