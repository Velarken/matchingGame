import {motion} from 'motion/react'
import logo from '../assets/logo.png'
export function StartPage({setDifficultyLevel,playClick}) {
    const variants = {
        hidden: {scale:0},
        visible: {
            scale:1,
            transition: {duration:0.5}
        }
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
                    <button onClick={() => {
                        setDifficultyLevel([5,3])
                        playClick();
                    }}
                    >Easy</button>
                    <button onClick={() => {
                        setDifficultyLevel([7,4]);
                        playClick();
                    }}>Medium</button>
                    <button onClick={() => {
                        setDifficultyLevel([10,5]);
                        playClick();
                    }}>Hard</button>
                </motion.div>
            </div>
        </>
    )
}
export default StartPage