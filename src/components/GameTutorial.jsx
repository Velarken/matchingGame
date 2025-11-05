import {motion} from 'motion/react'
import tutorialImage from '../assets/tutorialImage.png'
export function GameTutorial() {
    const variants = {
        hidden: {
            opacity:0,
            y:100,
            transition: {duration:0.6}
        },
        visible: {
            opacity:1,
            y:0,
            transition: {duration:0.6}
        }
    }
    return (
        <>
            <motion.div className='instructions'
                key='modal'
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='hidden'>
                    <div>Don't click the same card twice!</div>
                    <div>Click the Pokemon logo to reset game difficulty or to start over.</div>
                </motion.div>
                <motion.img
                    src={tutorialImage}
                    alt="Game Tutorial"
                    className='gameTutorial'
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'/>
        </>
    )
}
export default GameTutorial;