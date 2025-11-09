export function Sound({}) {
    return (
        <>
            <audio controls autoPlay loop >
                <source src='https://enls.eu/prelooped/downloads/ORAS/ORAS%20035%20Cycling.ogg' type='audio/ogg'/>
                <source src='..assets/backgroundMusic.mp3' type="audio/mpeg"/>
                Cannot play audio files
            </audio>
        </>
    )
}
export default Sound