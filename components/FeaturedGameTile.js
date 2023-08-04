import * as elements from 'typed-html';


export const FeaturedGameTile = ({name, path, imagePreview, description}) => {
    return (
        <div class="FeaturedGameTile">
            <a href={path}>
                <img src={imagePreview} loading="lazy" alt={name}/>
            </a>
            <div class="FeaturedGameTileRightContainer">
                <a href={path}>{name}</a>
                <div class="DashedSeparator"></div>
                <p>
                    {description}
                </p>
                <a href={path}>
                    <div class="PlayButton">
                        Play
                    </div>
                </a>
            </div>
        </div>
    )
}