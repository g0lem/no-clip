import * as elements from 'typed-html';


export const GameTile = ({name, path, imagePreview}) => {
    return (
        <div class="GameTile">
            <a href={path}>
                <img src={imagePreview} loading="lazy" alt={name}/>
            </a>
            <a href={path}>{name}</a>
        </div>
    )
}