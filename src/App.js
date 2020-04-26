import React, { useState } from "react";
import "./styles.css";

const games = [
  {
    name: "Quick and easy games for 4+ players",
    color: "indigo",
    hex: ["#EBF4FF", "#C3DAFE"],
    games: [
      {
        name: "Codenames",
        via: "horsepaste.com",
        description: `Split into two teams and give clues to your team to help the guess which word belongs to your team on a shared board filled with words.`,
        url: "https://www.horsepaste.com/",
        video: "https://www.youtube.com/watch?v=zQVHkl8oQEU"
      },
      {
        name: "Pictionary",
        via: "skribbl.io",
        time: "",
        description:
          "Draw the word you're given while everyone else tries to guess it.",
        url: "https://skribbl.io",
        video: "https://www.youtube.com/watch?v=enSezDurWFc"
      },
      {
        name: "Charades",
        time: "",
        via: "playcharades.net",
        description:
          "Act out the word you're given. Your partner needs to guess it as quickly as possible!",
        url: "http://www.playcharades.net/",
        video: "https://www.youtube.com/watch?v=5YPSfaEGTQ0"
      },
      {
        name: "Scattergories",
        via: "scattergoriesonline.net",
        time: "",
        description:
          "Compete to be the quickest to complete all the words that match the category.",
        url: "https://scattergoriesonline.net",
        video: "https://www.youtube.com/watch?v=WgRm_auxt_w"
      }
    ]
  },
  {
    name: "Games that take a bit longer to learn and play",
    color: "green",
    hex: ["#F0FFF4", "#C6F6D5"],
    games: [
      {
        name: "Avalon",
        players: "",
        tags: ["deception"],
        time: "",
        via: "avalon.fun",
        description:
          "A great game of deception where the baddies have to pretend to be goodies while trying to progress their agenda.",
        url: "https://avalon.fun/register",
        video: "https://www.youtube.com/watch?v=MpZYDpIM2dQ"
      },
      {
        name: "Hanabi",
        players: "",
        time: "",
        tags: ["cooperative"],
        via: "hanabi.live",
        description:
          "Hanabi is a cooperative game where you all are on the same team and you can see everyone else's cards, but not your own.",
        url: "https://hanabi.live/",
        video: "https://www.youtube.com/watch?v=d_js_3S_7K8"
      },
      {
        name: "Secret Hitler",
        players: "",
        tags: ["deception"],
        time: "",
        via: "secrethitler.io",
        description:
          "A game of deception where the fascists try to hide their true role while trying to get fascist policies passed to win the game.",
        url: "https://secrethitler.io",
        video: "https://www.youtube.com/watch?v=mbGXIDYdtas"
      },
      {
        name: "Settlers of Catan",
        players: "",
        time: "",
        via: "colonist.io",
        description:
          "A classic board game where you compete for limited resources by building settlements and roads on a hexagonal map.",
        url: "https://colonist.io",
        video: "https://www.youtube.com/watch?v=-oHvONNjxYw"
      }
    ]
  },
  {
    name: "Best for 2 or 3 players",
    color: "pink",
    hex: ["#FFF5F7", "#FED7E2"],
    games: [
      {
        name: "Scrabble",
        players: "",
        time: "",
        via: "isc.ro",
        description:
          "An online version of the classic word game where you score points by playing words that intersect others words already on the board.",
        url: "https://www.isc.ro/",
        video: "https://www.youtube.com/watch?v=swlg3vQXboE"
      },
      {
        name: "Hanabi",
        players: "",
        time: "",
        tags: ["cooperative"],
        via: "hanabi.live",
        description:
          "Hanabi is a cooperative game where you all are on the same team and you can see everyone else's cards, but not your own.",
        url: "https://hanabi.live/",
        video: "https://www.youtube.com/watch?v=d_js_3S_7K8"
      }
    ]
  },
  {
    name: "Drinking games",
    color: "orange",
    hex: ["#FFFAF0", "#FEEBC8"],
    games: [
      {
        name: "Picolo",
        players: "",
        time: "",
        via: "psycatgames.com",
        description:
          "A couple game modes to spice up a night. Seems could be done without the drinking element to get to know eachother better",
        url: "https://psycatgames.com/app/picolo/",
        video: ""
      },
      {
        name: "Drunk Pirate",
        players: "",
        time: "",
        via: "drunkpirate.co.uk",
        description:
          "For groups that just want to get told to drink over and over",
        url: "https://drunkpirate.co.uk/",
        video: ""
      }
    ]
  }
];

export default function App() {
  return (
    <div className="App py-8">
      <div className="max-w-4xl mx-auto">
        <div className="px-8 md:px-12 pb-4">
          <div className="md:text-6xl text-4xl font-bold text-gray-800">
            Friends and games
            <span role="img" className="pl-4 md:pl-8" aria-label="Icon">
              🎲
            </span>
          </div>
          <div className="text-gray-600 text-2xl md:text-3xl max-w-screen-md">
            A list of hand picked free online games to play during calls with
            your friends or family during this coronavirus crisis
          </div>
        </div>
        {games.map(category => (
          <div className={`py-4`} key={category.name}>
            <div
              className={`px-8 md:px-12 py-2 font-bold text-3xl md:text-4xl text-gray-700`}
            >
              {category.name}
            </div>
            <div className="grid md:grid-cols-2 items-stretch">
              {category.games.map((game, i) => (
                <div key={game.name} className="flex-1 m-4">
                  <div
                    style={{
                      borderRadius: "20px",
                      background: `linear-gradient(-121.72deg, ${
                        category.hex[0]
                      } 0%,${category.hex[1]} 100%)`
                    }}
                    className={`h-full text-xl hover:shadow-xl md:p-8 p-6 flex flex-col justify-between hover:scale-105 transform transition duration-100 ease-in-out`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-8">
                        <div
                          style={{ color: "#272750" }}
                          className={`font-bold mb-6`}
                        >
                          <span className="text-3xl inline-block leading-none">
                            {game.name}
                          </span>
                        </div>
                        <p className={`text-xl`} style={{ color: "#525273" }}>
                          {game.description}
                        </p>
                      </div>
                      <div className="flex stretch-items mt-auto">
                        <a
                          href={game.url}
                          style={{ borderRadius: "20px" }}
                          className={`w-full flex items-center justify-center border border-transparent text-base leading-6 font-medium bg-${
                            category.color
                          }-600 hover:bg-${category.color}-700 text-${
                            category.color
                          }-100 hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out py-4 md:text-lg`}
                        >
                          Start a game
                        </a>
                        {game.video && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={game.video}
                            style={{ borderRadius: "20px" }}
                            className={`ml-4 w-full flex items-center justify-center border border-transparent text-base leading-6 font-medium text-${
                              category.color
                            }-700 bg-${category.color}-200 hover:bg-${
                              category.color
                            }-300 hover:shadow-inner focus:outline-none focus:shadow-outline transition duration-150 ease-in-out py-4 md:text-lg`}
                          >
                            How to play
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="pb-2 pt-16 px-8 md:px-12">
          <a
            href="https://twitter.com/davidvfurlong"
            className="rounded-b hover:bg-gray-200 rounded p-4"
          >
            <svg
              className="inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="mailto:dvfurlong@gmail.com"
            className="mx-2 md:mx-4 rounded-b hover:bg-gray-200 rounded p-4"
          >
            Suggest a game
          </a>
          <span className="mx-2 md:mx-4 rounded-b rounded p-4 text-gray-600">
            Made in Amsterdam{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
