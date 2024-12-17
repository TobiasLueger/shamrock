import React from "react";
import Stage from "@/components/Stage/Stage";
import OpeningTimes from "@/components/OpeningTimes/OpeningTimes";
import EatDrinkTeaser from "@/components/EatDrinkTeaser/EatDrinkTeaser";

export default function Home() {
  return (
    <main className="pt-6 min-h-[3000px]">
      <Stage />
      <OpeningTimes />
      <EatDrinkTeaser />
    </main>
  );
}
