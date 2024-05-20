"use client"
import React from 'react';
import Image from 'next/image'
import Button from '../Button/Button';

const Stage = () => {
    return (
        <div className="bg-primary pt-56 py-24 flex flex-col items-center rounded-[30px] overflow-hidden">
            <div className='w-[356px] text-center flex flex-col gap-8 items-center relative mb-96'>
                <h1>Shamrock Irish Pub Rheinbach</h1>
                <p>Dein Irish Pub in der schönen Innenstadt von Rheinbach. Komm gerne vorbei und genieße mit uns deinen Abend.</p>
                <Button type="primary" href="#" className="w-fit">Aktuelles</Button>
                <Image src='/img/beer2.png' alt={'beer'} width={292} height={302} className='absolute -top-1/4 -left-[110%] scale-75' />
                <Image src='/img/beer5.png' alt={''} width={252} height={322} className='absolute -top-1/4 -right-[110%] scale-75' />
                <Image src='/img/beer3.png' alt={''} width={206} height={264} className='absolute top-1/2 -left-[85%] scale-75' />
                <Image src='/img/beer1.png' alt={''} width={166} height={296} className='absolute top-[40%] -right-full scale-75' />
                <Image src='/img/beer4.png' alt={''} width={330} height={229} className='absolute -bottom-[65%] scale-75'/>
            </div>
            <div className='w-[656px] text-center flex flex-col gap-8 items-center'>
                <h2>Mit uns den Abend genießen</h2>
                <p>Aber wer sind wir eigentlich? Wir sind alles Freunde und Nachbarn aus Rheinbach die dir einen schönen Abend bieten wollen.</p>
                <Button type="secondary" href="#" className="w-fit">Das Team</Button>
            </div>

        </div>
    )
}

export default Stage;