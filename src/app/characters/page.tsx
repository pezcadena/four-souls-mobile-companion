"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CharacterCardList } from "../cards/character-card-list";
import Navbar from "../components/navbar";

export default function Characters() {
  const cards = CharacterCardList;
  const [availableImages, setAvailableImages] = useState([...cards]);
  const [randomCard, setRandomCard] = useState(cards[0]);
  const [loading, setLoading] = useState(true);
  const [characterCharge, setCharacterCharge] = useState(false);
  const [itemCharge, setItemCharge] = useState(false);
  const [life, setLife] = useState([true,true,true,false,false, false]);

  useEffect(() => {
    getRandomCard();
  },[]);

  const getRandomCard = () => {
    
    if (availableImages.length === 0) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const randomIndex = getRandomIndex(availableImages);
    const selectedImage = availableImages[randomIndex];

    setRandomCard(selectedImage);

    const newAvailableImages = availableImages.filter((_, index) => index !== randomIndex);
    setAvailableImages(newAvailableImages);

  }
  
  const handleClickCharacter = () => {
    setCharacterCharge(!characterCharge);
  };

  const handleClickItem = () => {
    setItemCharge(!itemCharge);
  };

  const changeCard = ()=>{
    setLoading(true);
    getRandomCard();
  }

  const handleClickLife=(index:number)=>{
    let newLife = [...life];
    newLife = newLife.map((value,newIndex)=>{
      return newIndex<=index
    });
    setLife(newLife);
  }

  const reset = ()=>{
    setAvailableImages(cards);
    getRandomCard();
  }

  return (
    <main>
     <Navbar
        changeCard={changeCard}
        page={
          {title:'Cuartos',route:'/'}
        }
      ></Navbar>
      <div className="bg-black h-screen w-screen flex relative">
        <div className="pt-8 bg-black w-full">
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
          <div className="motion-safe:animate-bounce">
            {
              life.map((value,index)=>
                <b 
                  key={index} 
                  className={
                    index == 0
                      ? 'text-purple-400 text-3xl m-2'
                      :value 
                        ? "text-red-500 text-3xl m-2"
                        :"text-gray-400 text-3xl m-2"
                  }
                  onClick={()=>handleClickLife(index)}
                >
                  {index == 0 ?'X':'<3'}
                </b>
              )
            }
          </div>
          {
            availableImages.length == 0 
              ? (
                <div 
                  className="p-4 bg-green-700 text-white"
                  onClick={()=>reset()}
                >
                  Reiniciar
                </div>
              )
              : false
          }
          <Image
            src={randomCard[0]}
            width={3000}
            height={1000}
            alt="Room Card"
            className={
              loading
                ? 'opacity-0'
                : characterCharge 
                  ? 'w-full max-w-none rotate-90' 
                  : 'w-full max-w-none'
            }
            onClick={handleClickCharacter}
            onLoad={()=>setLoading(false)}
            priority={true}
          />
          <Image
            src={randomCard[1]}
            width={3000}
            height={1000}
            alt="Room Card"
            className={
              loading
                ? 'opacity-0'
                : itemCharge 
                  ? 'w-full max-w-none rotate-90' 
                  : 'w-full max-w-none'
            }
            onClick={handleClickItem}
            onLoad={()=>setLoading(false)}
            priority={true}
          />
        </div>
      </div>
    </main>
  );

  function getRandomIndex<T>(array: T[]): number {
      return Math.floor(Math.random() * array.length);
  }
}
