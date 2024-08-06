# def play_game(file_name):
#     with open(file_name, 'r', encoding='utf-8') as file:
#         game = file.read().split('\n\n')
#
#     for section in game:
#         lines = section.strip().split('\n')
#         if lines[0] == 'start':
#             print(lines[1])
#
#             choice = input().lower()
#             while choice not in ['left', 'right', 'deeper', 'back']:
#                 print("Invalid choice. Please try again.")
#                 choice = input().lower()
#
#             if choice == lines[2]:
#                 print(lines[3])
#             else:
#                 print(lines[4])
#
#     print("Game over.")
#
# play_game('input.txt')
ms =[1,2,3,4]
print(sum(ms))