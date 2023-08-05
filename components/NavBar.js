import * as elements from 'typed-html';
import { Logo } from './Logo';


export const NavBar = ({}) => {
    return (
        <div class="NavBar">
            <Logo/>
            <div class='VerticalDivider'/>
            <div class='NavBarItem'>
                <a href="/category/action">Action</a>
            </div>
            <div class='VerticalDivider'/>
            <div class='NavBarItem'>
            <a href="/category/adventure">Adventure</a>
            </div>
            <div class='VerticalDivider'/>
            <div class='NavBarItem'>
            <a href="/category/casual">Casual</a>
            </div>
            <div class='VerticalDivider'/>
        </div>
    )
}