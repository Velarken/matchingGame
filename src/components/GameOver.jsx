import {motion} from 'motion/react'
export function GameOver({restartGame, result}) {
    return (
        <>
            <motion.div
                className={result === 'win' ? 'win' : 'lose'}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.7}}
                exit={{opacity:0}}
            >
                <div>
                    {result === 'win' ? 'You Win!' : 'You Lose.'}
                </div>
                <button onClick={() => {
                    restartGame();
                }}>
                    Restart
                </button>
            </motion.div>
            <motion.div
                className='overlay'
                initial={{opacity:0}}
                animate={{opacity:0.6}}
                transition={{duration:0.7}}
                exit={{opacity:0}}
            >
            </motion.div>
        </>
    )
}
export default GameOver;