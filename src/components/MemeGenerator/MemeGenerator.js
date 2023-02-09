import React from 'react'
import '../../css/memegenerator.css'
import Meme from './Meme';
import MemeHeader from './MemeHeader';

const MemeGenerator = () => {
    return (
        <>
            <MemeHeader />
            <Meme />
        </>
    )
}

export default MemeGenerator;