import Tilt from 'react-parallax-tilt'
import './Card.css'
export function Card({
    character,
    isFlipped,
    handleCardClick
}) {
    return (
        <div
            className={isFlipped ? 'card flipped' : 'card'}
            onClick={() => {handleCardClick(character)}}>
                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.6}
                    glareColor='#ffffff'
                    glarePosition='bottom'
                    glareBorderRadius='20px'
                    className='tilt'>
                        <div className="cardFace">
                            <div
                                className='characterDisplay'
                                style={{backgroundImage: `url${character.src}`}} />
                                <div className="name">{character.name}</div>
                        </div>
                        <div className="cardBack"></div>
                    </Tilt>
        </div>
    )
}
export default Card;