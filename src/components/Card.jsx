import Tilt from 'react-parallax-tilt'
import '../Card.css'
import { useState,useEffect } from 'react'
import { radialGradient } from 'motion/react-client'
import cardTexture from '../assets/cardBackground.jpg'

export function Card({
    character,
    img,
    isFlipped,
    handleCardClick
}) {
    const [characterSound,setCharacterSound] = useState(null)
    const [characterSprite,setCharacterSprite] = useState(null)
    useEffect(() => {
        // return the cry of the selected pokemon
        fetch(`https://pokeapi.co/api/v2/pokemon/${character.name}/`)
            .then(function(response) {
                return response.json()
            })
            .then(function(response) {
                setCharacterSound(response.cries.latest)
                setCharacterSprite(response.sprites.front_default)
            })
            .catch(function(err) {
                alert(err)
            })
    }, [characterSound,characterSprite])
    function handlePlaySound() {
        let audio = new Audio(characterSound)
        audio.play();
    }
    return (
        <div
            className={isFlipped ? 'card flipped' : 'card'}
            onClick={() => {
                handlePlaySound() // play pokemon cry when flipped
                handleCardClick(character)
                console.log('card clicked')
                }}>
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor='#ffffff'
                glarePosition='bottom'
                glareBorderRadius='20px'
                className='tilt'>
                    {!isFlipped ?
                    <div className="cardFace"
                        style={{
                            backgroundColor:'black',
                            border:'2px,solid,blue',
                            borderRadius:'12px',
                        }}
                    >
                        <div
                            className='characterDisplay'
                            style={{
                                backgroundImage: `url(${characterSprite}), radial-gradient(#FFFFFF, #0F52BA)`,
                                backgroundPosition:'center',
                                backgroundSize:'cover',
                                backgroundRepeat:'no-repeat'
                                }} />
                        <div className="name">{character.name.charAt(0).toUpperCase() +character.name.slice(1)}</div>
                    </div>
                    :
                    <div className="cardBack"></div>
                    }
            </Tilt>
        </div>
    )
}
export default Card;