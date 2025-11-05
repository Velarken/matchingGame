import {motion} from 'motion/react'
import logo from '../assets/logo.png'
export function Header({
    goToStartPage,
    playClick,
    score,
    bestScore
}) {
    const variants = {
        hidden:{opacity:0},
        visible: {
            opacity:1,
            transition:{duration:0.6}
        }
    }
    return (
        <header>
            <div className="headerContainer">
                <motion.img
                    src={logo}
                    alt='Logo'
                    onClick={() => {
                        goToStartPage();
                        playClick();
                    }}
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                />
                <motion.div
                    className='score'
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                >
                    <div>Score: {score}</div>
                    <div>Best Score: {bestScore}</div>
                </motion.div>
            </div>
        </header>
    )
}
export default Header;