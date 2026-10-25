import { useState,useEffect } from 'react'
import { t } from '../data/translations'
import { doc, onSnapshot, updateDoc, increment } from 'firebase/firestore'
import { db } from '../firebase'

import PixelCat from './PixelCat'
import PixelIcon from './PixelIcon'

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

    return (
      <div className="flex flex-col items-center">
        <PixelCat mode={mode} scale={6}></PixelCat>

        <div className="flex gap-3">
          <button
            onClick={handleFeed}
            disabled={busy}
            aria-label={t[props.lang].petFeed}
            title={t[props.lang].petFeed}
            className="flex flex-col items-center gap-1 cursor-pointer transition-transform hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800 rounded"
          >
            <PixelIcon name="bowl" scale={2} />
            <span className="text-sm font-bold tabular-nums">{feeds}</span>
          </button>

          <button
            onClick={handlePet}
            disabled={busy}
            aria-label={t[props.lang].petPet}
            title={t[props.lang].petPet}
            className="flex flex-col items-center gap-1 cursor-pointer transition-transform hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800 rounded"
          >
            <PixelIcon name="hand" scale={2} />
            <span className="text-sm font-bold tabular-nums">{pets}</span>
          </button>
        </div>
      </div>
    );
}