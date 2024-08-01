import Image from "next/image";

export default function Home() {
  const cards = [
    'https://foursouls.com/wp-content/uploads/2022/01/r-all_hallows_eve.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-angelic_intervention.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-battle_royale.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-battle_royale_2.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-battle_royale_3.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-beggar.png',
    'https://foursouls.com/wp-content/uploads/2021/10/r-black_champions.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-blessing_of_gluttony.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-blessing_of_greed.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-blessing_of_steam.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-blessing_of_the_inner_eye.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-blessing_of_the_sack.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-blind_rage.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-blood_donation.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-blood_lust.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-blood_money.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-bomb_bum.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-bum_bo_is_loose.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-butter_fingers.png',
    'https://foursouls.com/wp-content/uploads/2021/10/r-challenge_room.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-conjoined_twin.png',
    'https://foursouls.com/wp-content/uploads/2021/10/r-devil_beggar.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-dice_room_1.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-dice_room_2.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-dice_room_3.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-dice_room_4.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-dice_room_5.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-dice_room_6.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-edens_blessing.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-equality.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-eternal_chest.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-floor_spikes.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-fortune_teller.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-greed_looms.png',
    'https://foursouls.com/wp-content/uploads/2021/10/r-gus.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-haunted.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-heavy_is_the_head.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-i_am_error.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-isaacs_blessing.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-key_master.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-laser_eye.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-maggys_blessing.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-might_for_the_meek.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-pity_for_the_poor.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-planetarium.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-red_champions.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-red_vise.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-restock_machine.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-samsons_blessing.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-shadow_of_famine.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-shadow_of_war.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-shell_game.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-slot_machine.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-social_goals.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-spider_webs.png',
    'https://foursouls.com/wp-content/uploads/2021/10/r-splash_damage.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-spoils_of_war.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-static_shock.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-tax_for_the_mighty.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-the_mirror.png',
    'https://foursouls.com/wp-content/uploads/2022/01/r-white_champions.png',
    'https://foursouls.com/wp-content/uploads/2022/01/rwz-the_isaac_of_isaac_re_isaac.png',
    'https://foursouls.com/wp-content/uploads/2022/10/p-black_market.png'
  ];
  const randomCard = cards[getRandomIndex(cards)];
  return (
    <main>
      <div className="bg-black h-screen w-screen flex items-center justify-center">
        <div className="bg-black w-[137%] absolute">
          <Image
            src={randomCard}
            width={3000}
            height={1000}
            alt="Room Card"
            className="w-full rotate-90 max-w-none"
          />
        </div>
      </div>
    </main>
  );

  function getRandomIndex<T>(array: T[]): number {
      return Math.floor(Math.random() * array.length);
  }
}
