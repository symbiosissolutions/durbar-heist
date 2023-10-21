import time


from typing import List
from pydantic import BaseModel


class Durbar(BaseModel):
    """
    The Durbar represents a player's Palace.
    It holds a treasure room with a secret passphrase to open the treasure room.
    """

    id: str
    passphrase: str
    treasure_room: int


class Guard(BaseModel):
    """
    Guard represents an AI homemaker robot assigned to a Durbar.
    It acts as the caretaker of the Durbar and follows instructions
    given by the Durbar owner.
    """

    durbar: Durbar
    instruction: str = (
        f"The secret passphrase to the treasure room is {Durbar.passphrase}."
    )

    def update_instruction(self, new_instruction: str):
        self.instruction = new_instruction

    def check_passphrase(self, guess: str) -> bool:
        return guess == self.durbar.passphrase


class DurbarDefenceGame(BaseModel):
    attacking_durbar: Durbar
    defending_durbar: Durbar
    loot_amount: int = 100
    max_attempts: int = 3
    time_limit: int = 5

    def play(self):
        while True:
            self.display_game_state()

            # Prompt player for action
            action = input("Select an action (Loot): ").lower()

            if action == "loot":
                self.attempt_loot()
            else:
                print("Invalid action. Please try again.")

    def display_game_state(self):
        print("Durbar Defence Game")
        print("-------------------")
        print("Map:")
        print(f"{self.attacking_durbar.id}: {self.attacking_durbar.treasure_room} gold")
        print(f"{self.defending_durbar.id}: {self.defending_durbar.treasure_room} gold")
        print()

    def attempt_loot(self):
        guess = input("Enter the passphrase guess: ")

        defender_guard = Guard(self.defending_durbar)

        for _ in range(self.max_attempts):
            start_time = time.time()
            elapsed_time = 0

            while elapsed_time < self.time_limit:
                if defender_guard.check_passphrase(guess):
                    self.steal_loot()
                    print("Loot successful!")
                    return

                elapsed_time = time.time() - start_time

            guess = input("Incorrect guess. Enter a new passphrase guess: ")

        print("Loot failed. Maximum attempts reached.")

    def steal_loot(self):
        self.defending_durbar.treasure_room -= self.loot_amount
        self.attacking_durbar.treasure_room += self.loot_amount


# Example usage
durbars = [
    Durbar("Durbar1", "passphrase1", 1000),
    Durbar("Durbar2", "passphrase2", 1000),
    Durbar("Durbar3", "passphrase3", 1000),
]

game = DurbarDefenceGame(durbars)
game.play()
