import { useState } from 'react'
import { t } from '../data/translations'

import PixelCat from './PixelCat'

export default function Pet(props) {
    const [mode, setMode] = useState('idle');
    const [feeds, setFeeds] = useState(0);
    const [pets, setPets] = useState(0);
    const [busy, setBusy] = useState(false);
 
    function handleFeed() {
        setMode('eating');
        setFeeds(f => f + 1);
        setBusy(true);

        setTimeout(() => {
            setMode('idle');
            setBusy(false);
        }, 2000);
    }

    function handlePet() {
        setMode('petted');
        setPets(p => p + 1);
        setBusy(true);

        setTimeout(() => {
            setMode('idle');
            setBusy(false);
        }, 2000);
    }

    return(
        <div>
            <PixelCat mode={mode}></PixelCat>
            <p>Nakŕmený: {feeds}x</p>
            <p>Pohladený: {pets}x</p>

            <button className="ml-auto mr-6 px-4 py-2 cursor-pointer inline-block bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-400 transition-colors disabled:opacity-50" 
            onClick={handleFeed} disabled={busy}>{t[props.lang].petFeed}
            </button>

            <button className="ml-auto mr-6 px-4 py-2 cursor-pointer inline-block bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-400 transition-colors disabled:opacity-50" 
            onClick={handlePet} disabled={busy} >{t[props.lang].petPet}
            </button>
        </div>
    )
}