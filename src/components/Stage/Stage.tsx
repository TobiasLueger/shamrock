"use client"
import React from 'react';
import Button from '../Button/Button';

const Stage = () => {
    return (
        <div className="bg-primary py-24 flex flex-col items-center rounded-[30px] overflow-hidden">
            <div className='w-[356px] text-center flex flex-col gap-8 items-center'>
                <h1>Shamrock Irish Pub Rheinbach</h1>
                <p>Dein Irish Pub in der schönen Innenstadt von Rheinbach. Komm gerne vorbei und genieße mit uns deinen Abend.</p>
                <Button type="primary" href="#" className="w-fit">Aktuelles</Button>
            </div>
            <div className='w-[656px] text-center flex flex-col gap-8 items-center mt-56'>
                <h2>Mit uns den Abend genießen</h2>
                <p>Aber wer sind wir eigentlich? Wir sind alles Freunde und Nachbarn aus Rheinbach die dir einen schönen Abend bieten wollen.</p>
                <Button type="secondary" href="#" className="w-fit">Das Team</Button>
            </div>

        </div>
    )
}

export default Stage;