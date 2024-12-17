"use client"
import React from 'react';

interface EatDrinkTeaserProps {
  className?: string
}

const EatDrinkTeaser = ({
  className,
}: EatDrinkTeaserProps) => {
  return (
    <div className={`bg-[#f8f7f4] p-6 md:p-10 ${className}`}>
      <h2 className="text-primary text-left mb-6">Essen & Trinken</h2>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
        <div className="md:col-span-7 bg-primary rounded-3xl p-6 text-white relative">
          <p className="text-2xl font-medium mb-4">Unser Essen</p>
          <p className="mb-2">Aber wer sind wir eigentlich?</p>
          <p className="mb-2">Wir sind alles Freunde und Nachbarn aus Rheinbach</p>
          <p>die dir einen schönen Abend bieten wollen.</p>
        </div>
        <a href='#'>
          <div className="bg-primary py-36 rounded-3xl flex items-center justify-center">
              <p className="transform -rotate-90 text-white whitespace-nowrap text-lg">Zu unserem Essen</p>
          </div>
        </a>
        <div className="md:col-span-7 bg-white border-8 border-primary rounded-3xl p-6 relative">
          <p className="text-2xl font-medium mb-4 text-primary">Unsere Getränke</p>
          <p className="mb-2 text-primary">Aber wer sind wir eigentlich?</p>
          <p className="mb-2 text-primary">Wir sind alles Freunde und Nachbarn aus Rheinbach</p>
          <p className="text-primary">die dir einen schönen Abend bieten wollen.</p>
        </div>
        <a href='#'>
          <div className="bg-white border-8 py-36 border-primary rounded-3xl flex items-center justify-center">
            <p className="transform -rotate-90 text-primary whitespace-nowrap text-lg">Zu unseren Getränken</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default EatDrinkTeaser;
