import {motion} from 'motion/react'
import logo from '../assets/logo.png'
import startSound from '../assets/game_start.mp3'
import '../StartPage.css';

export function StartPage({setDifficultyLevel,playClick}) {
    const variants = {
        hidden: {scale:0},
        visible: {
            scale:1,
            transition: {duration:0.5}
        }
    }
    function handlePlaySound() {
        let audio = new Audio(startSound)
        audio.play();
    }
    return (
        <>
            <div className="startPage">
                <motion.img
                    src={logo}
                    alt='Logo'
                    className='logo'
                    variants={variants}
                    initial='hidden'
                    animate='visible'/>
                <motion.h1 
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                > 
                    Memory Game
                </motion.h1>
                <motion.div
                    className='difficultyLevels'
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                >
                    <div className='buttons'>
                        <button onClick={() => {
                            handlePlaySound();                        
                            setDifficultyLevel([5,3]);
                        }}
                        >Easy</button>
                        <button onClick={() => {
                            handlePlaySound();
                            setDifficultyLevel([7,4]);
                        }}>Medium</button>
                        <button onClick={() => {
                            handlePlaySound();
                            setDifficultyLevel([10,5]);
                        }}>Hard</button>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default StartPage