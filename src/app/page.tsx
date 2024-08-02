"use client"
import Image from "next/image";
import Link from 'next/link'
import { useEffect, useState } from "react";
import { RoomCardList } from "./cards/room-card-list";

export default function Home() {
  const cards = RoomCardList;
  const [randomCard, setRandomCard] = useState(cards[0]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setRandomCard(cards[getRandomIndex(cards)]);
  }, [cards]);

  const changeCard = ()=>{
    setLoading(true);
    setRandomCard(cards[getRandomIndex(cards)]);
  }

  return (
    <main>
      <div className="flex absolute top-0 z-10">
        <div onClick={changeCard} className="  text-yellow-400  p-2 animate-bounce">
            Cambiar
        </div>
        <Link className="text-red-500  p-2 animate-bounce" href="/characters">Personajes</Link>
      </div>
      <div className="bg-black h-screen w-screen flex items-center justify-center overflow-hidden relative">
        <div className="bg-black w-[137%] absolute">
          {
            loading
              ? (
                <div className="flex flex-col items-center">
                  <Image
                    src='https://media.tenor.com/WiTP5aZyPLUAAAAi/dice-roll-dice.gif'
                    width={100}
                    height={100}
                    alt="Dice animation"
                  />
                  <div className="flex justify-center gap-4 items-center">
                    <p className="animate-spin text-white">@</p>
                    <p className="text-white text-center animate-pulse">Cargando</p>
                    <p className="animate-spin text-white">@</p>
                  </div>
                </div>
              )
              : false
          }
          <Image
            src={randomCard}
            width={3000}
            height={1000}
            alt="Room Card"
            className={
              loading 
                ? 'opacity-0'
                : 'w-full rotate-90 max-w-none'
            }
            onLoad={()=>setLoading(false)}
          />
        </div>
      </div>
    </main>
  );

  function getRandomIndex<T>(array: T[]): number {
      return Math.floor(Math.random() * array.length);
  }
}
