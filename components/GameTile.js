import * as elements from 'typed-html';
import { VisibilityRatings } from '../constants/MockGameDB';
import { FeaturedGameTile } from './FeaturedGameTile';
import { RegularGameTile } from './RegularGameTile';


export const GameTile = (props) => {
    const { visibilityRating } = props;
    if(visibilityRating === VisibilityRatings.FEATURED) {
        return <FeaturedGameTile {...props}/>
    }
    return (
        <RegularGameTile {...props}/>
    )
}