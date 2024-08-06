from itertools import combinations

n = int(input())
arr = list(map(int, input().split()))

min_diff = float('inf')
result = []

half_n = n // 2
for _ in combinations(range(n), half_n):

    remaining_indices = set(range(n)) - set(_)
    diff = max(arr[i] for i in _) - min(arr[i] for i in _)
    denominator_product = 1
    for other_index in combinations(remaining_indices, half_n):
        denominator_product *= max(arr[i] for i in other_index) - min(arr[i] for i in other_index)
    ratio = diff / denominator_product
    if ratio < min_diff:
        min_diff = ratio
        result = [arr[i] for i in _]

print(min_diff)
print(*result)