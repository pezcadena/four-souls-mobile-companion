"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Characters() {
  const cards = [
    [
      'https://foursouls.com/wp-content/uploads/2022/01/g2-azazel.png',
      'https://foursouls.com/wp-content/uploads/2022/01/g2-lord_of_the_pit.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/g2-the_lost.png',
      'https://foursouls.com/wp-content/uploads/2022/01/g2-holy_mantle.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/g2-the_keeper.png',
      'https://foursouls.com/wp-content/uploads/2022/01/g2-wooden_nickel.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/g2-apollyon.png',
      'https://foursouls.com/wp-content/uploads/2022/01/g2-void.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/fsp2-bum_bo.png',
      'https://foursouls.com/wp-content/uploads/2022/01/fsp2-bag_o_trash.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/fsp2-dark_judas.png',
      'https://foursouls.com/wp-content/uploads/2022/01/fsp2-dark_arts.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/fsp2-guppy.png',
      'https://foursouls.com/wp-content/uploads/2022/01/fsp2-infestation.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/fsp2-whore_of_babylon.png',
      'https://foursouls.com/wp-content/uploads/2022/01/fsp2-gimpy.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-bethany.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-book_of_virtues.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-jacob_and_esau.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-sibling_rivalry.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_broken.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-spindown_dice.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_dauntless.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-hypercoagulation.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_hoarder.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-bag_of_crafting.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_deceiver.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-ceremonial_blade.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_soiled.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-ibs.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_curdled.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-sumptorium.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_savage.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-berserk.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_benighted.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-hemoptysis.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_capricious.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-glitch.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_baleful.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-soulbond.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_harlot.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-gello.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_miser.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-keepers_bargain.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_empty.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-abyss.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_fettered.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-dead_weight.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_zealot.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-lemegeton.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-the_deserter.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-anima_sola.png'
    ],
    [
      'https://foursouls.com/wp-content/uploads/2022/01/r-flash_isaac.png',
      'https://foursouls.com/wp-content/uploads/2022/01/r-classic_roller.png'
    ]
  ];
  const [randomCard, setRandomCard] = useState(cards[getRandomIndex(cards)]);

  const [rotate, setRotate] = useState(false);
  const [rotate2, setRotate2] = useState(false);

  const handleClick = () => {
    setRotate(!rotate);
  };

  const handleClick2 = () => {
    setRotate2(!rotate2);
  };

  return (
    <main>
      <div className="flex absolute top-0 z-10">
        <div onClick={()=>setRandomCard(cards[getRandomIndex(cards)])} className="  text-yellow-400  p-2 animate-bounce">
            Cambiar
        </div>
        <Link className="text-red-500  p-2 animate-bounce" href="/">Cuartos</Link>
      </div>
      <div className="bg-black h-screen w-screen flex relative">
        <div className="pt-8 bg-black w-full">
          <Image
            src={randomCard[0]}
            width={3000}
            height={1000}
            alt="Room Card"
            className={rotate ? 'w-full max-w-none rotate-90' : 'w-full max-w-none'}
            onClick={handleClick}
          />
          <Image
            src={randomCard[1]}
            width={3000}
            height={1000}
            alt="Room Card"
            className={rotate2 ? 'w-full max-w-none rotate-90' : 'w-full max-w-none'}
            onClick={handleClick2}
          />
        </div>
      </div>
    </main>
  );

  function getRandomIndex<T>(array: T[]): number {
      return Math.floor(Math.random() * array.length);
  }
}
