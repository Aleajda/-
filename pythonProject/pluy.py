def load_game():
    game_states = {}
    with open("game.txt", "r", encoding='utf-8') as file:
        for line in file:
            parts = line.split(":")
            state_name = parts[0].strip()
            actions = [action.strip() for action in parts[1].split(",")]
            game_states[state_name] = actions
    return game_states
instantStr = []
exeptStr = "Вас поймали"
def display_action(game_states, current_state):
    if len(game_states[current_state]) != 1:
        print("Выберите действие:")
        if current_state in game_states:
            for i, action in enumerate(game_states[current_state], start=1):
                if action[-1] in "0123456789":
                    action = action[:-1]
                    print(f"{i}. {action}")
                if action in instantStr:
                    print(exeptStr)
                elif "INSTANT" in action:
                    instantStr.append(action)
                    action = action[:-7]
                    print(f"{i}. {action}")
                else:
                    print(f"{i}. {action}")
    else:
        if current_state in game_states:
            for i, action in enumerate(game_states[current_state], start=1):
                print(f"{action}")
def display_content(state_descriptions, current_state):
    if current_state in state_descriptions:
        print(state_descriptions[current_state])
        print()

def process_input(game_states, state_descriptions, current_state, input_str, history):
    try:
        choice = int(input_str)
        if choice == len(game_states[current_state]) + 1 and history:
            current_state = history.pop()
            print(f"Вы вернулись к предыдущему состоянию: {current_state}")
        elif 1 <= choice <= len(game_states[current_state]):
            history.append(current_state)
            current_state = game_states[current_state][choice - 1]
        else:
            print("Неверный выбор, попробуйте снова.")
    except ValueError:
        print("Пожалуйста, введите число.")
    return current_state

def main():
    game_states = load_game()
    state_descriptions = {}
    with open("story.txt", "r", encoding='utf-8') as file:
        for line in file:
            parts = line.split(":")
            state_name = parts[0].strip()
            description = parts[1].strip() if len(parts) > 1 else ""
            state_descriptions[state_name] = description

    current_state = "start"
    history = []

    while True:
        display_content(state_descriptions, current_state)
        display_action(game_states, current_state)
        input_str = input()
        current_state = process_input(game_states, state_descriptions, current_state, input_str, history)

if __name__ == "__main__":
    main()