import { useState } from 'react'
import { t } from '../data/translations'

import PixelCat from './PixelCat'

export default function Pet(props) {
    const [mode, setMode] = useState('idle');

    function handleFeed() {
        setMode('eating');
        setTimeout(() => setMode('idle'), 2000);
    }

    function handePet() {
        setMode('petted');
        setTimeout(() => setMode('idle'), 2000);
    }

    return(
        <div>
            <PixelCat mode={mode}></PixelCat>

            <button className="ml-auto mr-6 px-4 py-2 cursor-pointer inline-block bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-400 transition-colors" 
            onClick={handleFeed}>{t[props.lang].petFeed}
            </button>

            <button className="ml-auto mr-6 px-4 py-2 cursor-pointer inline-block bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-400 transition-colors" 
            onClick={handePet}>{t[props.lang].petPet}
            </button>
        </div>
    )
}