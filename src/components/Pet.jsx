import { useState,useEffect } from 'react'
import { t } from '../data/translations'
import { doc, onSnapshot, updateDoc, increment } from 'firebase/firestore'
import { db } from '../firebase'

import PixelCat from './PixelCat'

const statsRef = doc(db, 'pet', 'stats')

export default function Pet(props) {
    const [mode, setMode] = useState('idle');
    const [feeds, setFeeds] = useState(0);
    const [pets, setPets] = useState(0);
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(statsRef, (snap) => {
            const data = snap.data()
            setPets(data.pets)
            setFeeds(data.feeds)
        })
        return unsubscribe
    }, [])

    function handleFeed() {
        setMode('eating');
        updateDoc(statsRef, { feeds: increment(1) })
        setBusy(true);

        setTimeout(() => {
            setMode('idle');
            setBusy(false);
        }, 2000);
    }

    function handlePet() {
        setMode('petted');
        updateDoc(statsRef, { pets: increment(1) })
        setBusy(true);

        setTimeout(() => {
            setMode('idle');
            setBusy(false);
        }, 2000);
    }

    return(
        <div>
            <PixelCat mode={mode} scale={6}></PixelCat>
            <p>{t[props.lang].fed}: {feeds}x</p>
            <p>{t[props.lang].petted}: {pets}x</p>

            <button className="ml-auto mr-6 px-4 py-2 cursor-pointer inline-block bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-400 transition-colors disabled:opacity-50" 
            onClick={handleFeed} disabled={busy}>{t[props.lang].petFeed}
            </button>

            <button className="ml-auto mr-6 px-4 py-2 cursor-pointer inline-block bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-400 transition-colors disabled:opacity-50" 
            onClick={handlePet} disabled={busy} >{t[props.lang].petPet}
            </button>
        </div>
    )
}