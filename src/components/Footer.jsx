/* import GameTutorial from './GameTutorial'
import { motion } from 'motion/react'
import {useState} from 'react'
import Volume  from '../assets/utility/volume.svg'
import VolumeOff  from '../assets/utility/volume_off.svg'

export function Footer({
    isMusicPlaying,
    setIsMusicPlaying,
    isSoundPlaying,
    setIsSoundPlaying,
    playClick
}) {
    const [isInfoNeeded,setIsInfoNeeded] = useState(false);
    return (
        <>
            <motion.footer
                initial={{opacity:0, y:100}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.7}}
            >
                <div className="footerContainer">
                    <div className="soundSection">
                        <button onClick={() => {
                            setIsSoundPlaying(!isSoundPlaying);
                            playClick();
                        }}>
                            {isSoundPlaying
                            ? <Volume className='svg'/>
                            : <VolumeOff className='svg'/>}
                        </button>
                    </div>
                </div>
            </motion.footer>
        </>
    )
}
export default Footer; */