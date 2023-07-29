import * as elements from 'typed-html';
import { Logo } from './Logo';


export const NavBar = ({}) => {
    return (
        <div class="NavBar">
            <Logo/>
            <div class='VerticalDivider'/>
            <div class='NavBarItem'>
                Test
            </div>
            <div class='VerticalDivider'/>
        </div>
    )
}