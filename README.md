# Durbar Heist Game Documentation

The Durbar Heist game is a prompt warfare game that aims to teach players the basics of prompting AI. In this game, multiple players participate in a sandbox map, each with their own Durbar (Palace) assigned a secret passphrase. The objective is to protect your Durbar's passphrase while attempting to loot other players' Durbars by guessing their passphrases. The game includes configurable time limits and a maximum number of attempts for guessing the passphrase.

## Table of Contents

1. [Game Overview](#game-overview)
2. [Installation](#installation)
3. [Game Rules](#game-rules)
4. [Game Mechanics](#game-mechanics)
5. [Class Documentation](#class-documentation)
6. [Example Usage](#example-usage)

## Game Overview

The Durbar Heist game is a turn-based strategy game where players interact with AI homemaker robots named Guard. Each player has their own Durbar, which is assigned a secret passphrase. The Durbar contains a treasure room with a fixed amount of gold. Players can attempt to loot other players' Durbars by talking to their Guard and guessing the passphrase. If successful, they steal a fixed amount of gold from the opponent.

## Installation

To run the Durbar Heist game, follow these steps:

1. Install Docker and Docker-compose on your system.
2. Download the game code from the provided source.
3. Open a terminal or command prompt and navigate to the directory where the game code is located.
4. Run the following command to install the required dependencies:

`docker-compose up --build -d`


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
