"use client"
import React from 'react';

interface OpeningTimesProps {
  className?: string
}

const OpeningTimes = ({
  className,
}: OpeningTimesProps) => {
  return (
    <div className={`${className} bg-bg text-primary py-20 px-4 w-full`} >
      <div className="max-w-md mx-auto text-center">
        <h2 className="mb-6 flex text-primary items-center justify-center">
          Öffnungszeiten
        </h2>
        <ul className="space-y-4 text-lg">
          <li>
            <span className="font-bold">Dienstag – Donnerstag:</span>
            <br />
            18:00 – 01:00 Uhr
          </li>
          <li>
            <span className="font-bold">Freitag – Samstag:</span>
            <br />
            18:00 – 05:00 Uhr
          </li>
          <li>
            <span className="font-bold">Sonntag und Montag:</span>
            <br />
            Ruhetag
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OpeningTimes;
