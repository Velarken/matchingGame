import Tilt from 'react-parallax-tilt'
import '../Card.css'
import { useState,useEffect } from 'react'

export function Card({
    character,
    img,
    isFlipped,
    handleCardClick
}) {
    const [characterSound,setCharacterSound] = useState(null)
    useEffect(() => {
        // return the cry of the selected pokemon
        fetch(`https://pokeapi.co/api/v2/pokemon/${character.name}/`)
            .then(function(response) {
                return response.json()
            })
            .then(function(response) {
                setCharacterSound(response.cries.latest)
            })
            .catch(function(err) {
                alert(err)
            })
    }, [characterSound])
    function handlePlaySound() {
        let audio = new Audio(characterSound)
        audio.play();
    }
    return (
        <div
            className={isFlipped ? 'card flipped' : 'card'}
            onClick={(e) => {
                handlePlaySound() // play pokemon cry when flipped
                handleCardClick(character)
                console.log(character.src)
                }}>
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
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundPosition:'center',
                                backgroundSize:'cover',
                                backgroundRepeat:'no-repeat'
                                }} />
                        <div className="name">{character.name.charAt(0).toUpperCase() +character.name.slice(1)}</div>
                    </div>
                    <div className="cardBack"></div>
            </Tilt>
        </div>
    )
}
export default Card;