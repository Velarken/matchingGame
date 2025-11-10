import {useState} from 'react';
import uniqid from 'uniqid'

export function MatchGamePage({
    difficultyLevel,
}) {
    const [userChoices,setUserChoices] = useState([null,null])
    const [pokedex,setPokedex] = useState([]);

    function getInfo() {
        let idNumber = Math.floor(Math.random()*1000)
        fetch(`https://pokeapi.co/api/v2/pokemon/${idNumber}/`)
            .then(function(response) {
                return response.json()
            })
            .then(function(response) {
                let pokemon = {
                    id: response.id,
                    cardId: uniqid(),
                    name: response.name,
                    cry: response.cries.latest,
                    src: response.sprites.front_default,
                    flipped:false,
                    countClick:0,
                }
                console.table(pokemon)
                return pokemon
            })
            .catch(function(err) {
                alert(err)
            })
    }
    //getInfo()
    function fillDex(difficultyLevel) {
        console.log('filling dex...')
        let randomCharacters = [];
        while (randomCharacters.length < difficultyLevel) {
            let pokemon = awaitgetInfo();
            console.log('pushing info to array...')
            randomCharacters.push(pokemon);
            setPokedex(randomCharacters)
        }
        console.table(randomCharacters)
    }
    function handleCardPair(cardInfo) {
        if (userChoices[0] !== null && userChoices[1] !== null) {
            // pair of cards selected, run function to check for match
            cardInfo.clickedCount += 1; // increment number of times card has been picked
            checkMatch()
        } else {
            // no match, flip cards back 
        }
    }
    function checkMatch() {
        if (userChoices[0].name === userChoices[1].name) {
            // match is made, increment points
        }
    }
    return (
        <>
            <button onClick={() => fillDex(difficultyLevel)}>Generate Dex</button>
            <button onClick={() => handlePractice()}>Push New Number</button>
        </>
    )
}
export default MatchGamePage;