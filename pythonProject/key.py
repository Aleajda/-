def check_win(matrix, a, b):
    directions = [(1, 0), (0, 1), (1, 1), (1, -1)]
    for da, db in directions:
        count = 1
        for i in range(1, 5):
            if [a + i * da, b + i * db] in matrix:
                count += 1
            else:
                break
        for i in range(1, 5):
            if [a - i * da, b - i * db] in matrix:
                count += 1
            else:
                break
        if count >= 5:
            return True
    return False

kol = int(input())
matr1 = []
matr2 = []

for i in range(kol):
    a, b = map(int, input().split())
    if i % 2 == 0:
        matr1.append([a, b])
        if len(matr1) > 4 and check_win(matr1, a, b):
            print("First" if i == kol - 1 else "Inattention")
            break
    else:
        matr2.append([a, b])
        if len(matr2) > 4 and check_win(matr2, a, b):
            print("Second" if i == kol - 1 else "Inattention")
            break
else:
    print("Draw")