# Durbar Defence Game Documentation

The Durbar Defence game is a prompt warfare game that aims to teach players the basics of prompting AI. In this game, multiple players participate in a sandbox map, each with their own Durbar (Palace) assigned a secret passphrase. The objective is to protect your Durbar's passphrase while attempting to loot other players' Durbars by guessing their passphrases. The game includes configurable time limits and a maximum number of attempts for guessing the passphrase.

## Table of Contents

1. [Game Overview](#game-overview)
2. [Installation](#installation)
3. [Game Rules](#game-rules)
4. [Game Mechanics](#game-mechanics)
5. [Class Documentation](#class-documentation)
6. [Example Usage](#example-usage)

## Game Overview

The Durbar Defence game is a turn-based strategy game where players interact with AI homemaker robots named Guard. Each player has their own Durbar, which is assigned a secret passphrase. The Durbar contains a treasure room with a fixed amount of gold. Players can attempt to loot other players' Durbars by talking to their Guard and guessing the passphrase. If successful, they steal a fixed amount of gold from the opponent.

## Installation

To run the Durbar Defence game, follow these steps:

1. Install Python 3.x on your system.
2. Download the game code from the provided source.
3. Open a terminal or command prompt and navigate to the directory where the game code is located.
4. Run the following command to install the required dependencies:

`pip install -r requirements.txt`

5. Once the dependencies are installed, run the game using the following command:
 The game aims to teach players about prompting AI while engaging in strategic gameplay.

`cd deubar-game`
`npm run dev`


## Game Rules

- Each player has their own Durbar with a secret passphrase.
- Players can attempt to loot other players' Durbars by guessing the passphrase.
- The game includes a configurable time limit for attempting the loot (default: 5 seconds).
- There is a maximum number of attempts allowed to guess the passphrase (default: 3 attempts).
- If a player successfully guesses the passphrase, they steal a fixed amount of gold from the opponent's treasure room.
- Players can update the instruction given to their own Guard at any time.
- The game continues until a game-ending condition is met, such as a player's treasure room being empty.

## Game Mechanics

[TODO: Add game mechanics]

## Class Documentation

[TODO: Add class documentation]

## Example Usage

[TODO: Add example usage]


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
