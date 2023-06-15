import React from "react";

const Info = () => {
  const data = [
    {
      image:
        "https://framerusercontent.com/images/fLPvY6NFTTmLU1I9QzPctbdYdv0.jpg?scale-down-to=512",
      text: "Effortlessly explore real-time interactive charts for all your favorite cryptocurrencies.",
    },
    {
      image:
        "https://framerusercontent.com/images/9CWITnvAk4UYkCmVudUGwKrTrBQ.jpg?scale-down-to=512",
      text: "Decipher the language of cryptocurrency markets with powerful trading tools.",
    },
    {
      image:
        "https://framerusercontent.com/images/3BW2irEmDPX2igi4cvxMjhq3H78.jpg?scale-down-to=512",
      text: "Stay ahead of the game with aggregated news from the most reliable crypto sources.",
    },
  ];
  return (
    <div className="w-full bg-[#d1495b] p-6 lg:p-0">
      <div className="grid lg:grid-cols-3 gap-2 lg:mx-52 md:pt-20">
        {data.map((card, index) => {
          return (
            <div>
              <div
                className="w-full h-[350px] bg-cover"
                style={{
                  backgroundImage: `url(${card.image})`,
                  filter: "brightness(0.8) saturate(1.2) hue-rotate(20deg)",
                }}
              ></div>
              <h1 className="font-Zilla text-white text-2xl mt-10">
                {card.text}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="grid md:grid-cols-2 w-full gap-10 lg:px-52 mt-48">
        <div className="grid-col">
          <h1 className="font-Monoton text-xl">CryptoCurrency Highlights</h1>
          <p className="font-Zilla text-white text-xl py-10">
            Our vast database includes the most popular and up-and-coming
            cryptocurrencies.
          </p>
        </div>
        <div className="grid-col">
          <h1 className="font-Monoton text-xl">Top Coins</h1>
          <div class="grid grid-cols-1 divide-y text-xl divide-gray-800 py-10 text-white font-Zilla">
            <div className="py-3 flex items-center justify-between" ><span>Bitcoin</span><span>2009</span></div>
            <div className="py-3 flex items-center justify-between" ><span>Ethereum</span><span>2015</span></div>
            <div className="py-3 flex items-center justify-between" ><span>Ripple</span><span>2012</span></div>
            <div className="py-3 flex items-center justify-between" ><span>Cardano</span><span>2017</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
