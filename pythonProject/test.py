kol = int(input())
matr1 = []
matr2 = []
result = "";
pob = 0
for i in range(kol):

    k=kol
    win = 0;
    if i%2 == 0:
        a,b  = input().split()
        a = int(a)
        b = int(b)
        matr1.append([a, b])
        if len(matr1) > 4:
            if [a-1, b-1] in matr1 and [a-2, b-2] in matr1 and [a-3, b-3] in matr1 and [a-4, b-4] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a+1, b+1] in matr1 and [a-2, b-2] in matr1 and [a-3, b-3] in matr1 and [a-1, b-1] in matr1:

                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a+1, b+1] in matr1 and [a+2, b+2] in matr1 and [a-1, b-1] in matr1 and [a-2, b-2] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a+1, b+1] in matr1 and [a+2, b+2] in matr1 and [a+3, b+3] in matr1 and [a-1, b-1] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a+1, b+1] in matr1 and [a+2, b+2] in matr1 and [a+3, b+3] in matr1 and [a+4, b+4] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"

            elif [a-1, b+1] in matr1 and [a-2, b+2] in matr1 and [a-3, b+3] in matr1 and [a-4, b+4] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a-1, b+1] in matr1 and [a-2, b+2] in matr1 and [a-3, b+3] in matr1 and [a+1, b-1] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a-1, b+1] in matr1 and [a-2, b+2] in matr1 and [a+2, b-2] in matr1 and [a+1, b-1] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a-1, b+1] in matr1 and [a+1, b-1] in matr1 and [a+2, b-2] in matr1 and [a+3, b-3] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a+4, b-4] in matr1 and [a+1, b-1] in matr1 and [a+2, b-2] in matr1 and [a+3, b-3] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"

            elif [a-1, b] in matr1 and [a-2, b] in matr1 and [a-3, b] in matr1 and [a-4, b] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a-1, b] in matr1 and [a-2, b] in matr1 and [a-3, b] in matr1 and [a+1, b] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a-1, b] in matr1 and [a-2, b] in matr1 and [a+2, b] in matr1 and [a+1, b] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a-1, b] in matr1 and [a+3, b] in matr1 and [a+2, b] in matr1 and [a+1, b] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a+4, b] in matr1 and [a+3, b] in matr1 and [a+2, b] in matr1 and [a+1, b] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"

            elif [a, b+1] in matr1 and [a, b+2] in matr1 and [a, b+3] in matr1 and [a, b+4] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a, b+1] in matr1 and [a, b+2] in matr1 and [a, b+3] in matr1 and [a, b-1] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a, b+1] in matr1 and [a, b+2] in matr1 and [a, b-2] in matr1 and [a, b-1] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a, b+1] in matr1 and [a, b-3] in matr1 and [a, b-2] in matr1 and [a, b-1] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a, b-4] in matr1 and [a, b-3] in matr1 and [a, b-2] in matr1 and [a, b-1] in matr1:
                if k == i+1 and result == "":
                    print("First")
                    pob = 1
                else:
                    result = "Inattention"










    else:
        a, b = input().split()
        a = int(a)
        b = int(b)
        matr2.append([a, b])
        if len(matr2) > 4:
            if [a - 1, b - 1] in matr2 and [a - 2, b - 2] in matr2 and [a - 3, b - 3] in matr2 and [a - 4,
                                                                                                    b - 4] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a + 1, b + 1] in matr2 and [a - 2, b - 2] in matr2 and [a - 3, b - 3] in matr2 and [a - 1,
                                                                                                      b - 1] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a + 1, b + 1] in matr2 and [a + 2, b + 2] in matr2 and [a - 1, b - 1] in matr2 and [a - 2,
                                                                                                      b - 2] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a + 1, b + 1] in matr2 and [a + 2, b + 2] in matr2 and [a + 3, b + 3] in matr2 and [a - 1,
                                                                                                      b - 1] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a + 1, b + 1] in matr2 and [a + 2, b + 2] in matr2 and [a + 3, b + 3] in matr2 and [a + 4,
                                                                                                      b + 4] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"

            elif [a - 1, b + 1] in matr2 and [a - 2, b + 2] in matr2 and [a - 3, b + 3] in matr2 and [a - 4,
                                                                                                      b + 4] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a - 1, b + 1] in matr2 and [a - 2, b + 2] in matr2 and [a - 3, b + 3] in matr2 and [a + 1,
                                                                                                      b - 1] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a - 1, b + 1] in matr2 and [a - 2, b + 2] in matr2 and [a + 2, b - 2] in matr2 and [a + 1,
                                                                                                      b - 1] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a - 1, b + 1] in matr2 and [a + 1, b - 1] in matr2 and [a + 2, b - 2] in matr2 and [a + 3,
                                                                                                      b - 3] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a + 4, b - 4] in matr2 and [a + 1, b - 1] in matr2 and [a + 2, b - 2] in matr2 and [a + 3,
                                                                                                      b - 3] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"

            elif [a - 1, b] in matr2 and [a - 2, b] in matr2 and [a - 3, b] in matr2 and [a - 4, b] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a - 1, b] in matr2 and [a - 2, b] in matr2 and [a - 3, b] in matr2 and [a + 1, b] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a - 1, b] in matr2 and [a - 2, b] in matr2 and [a + 2, b] in matr2 and [a + 1, b] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a - 1, b] in matr2 and [a + 3, b] in matr2 and [a + 2, b] in matr2 and [a + 1, b] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a + 4, b] in matr2 and [a + 3, b] in matr2 and [a + 2, b] in matr2 and [a + 1, b] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"

            elif [a, b + 1] in matr2 and [a, b + 2] in matr2 and [a, b + 3] in matr2 and [a, b + 4] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a, b + 1] in matr2 and [a, b + 2] in matr2 and [a, b + 3] in matr2 and [a, b - 1] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a, b + 1] in matr2 and [a, b + 2] in matr2 and [a, b - 2] in matr2 and [a, b - 1] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a, b + 1] in matr2 and [a, b - 3] in matr2 and [a, b - 2] in matr2 and [a, b - 1] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
            elif [a, b - 4] in matr2 and [a, b - 3] in matr2 and [a, b - 2] in matr2 and [a, b - 1] in matr2:
                if k == i+1 and result == "":
                    print("Second")
                    pob = 1
                else:
                    result = "Inattention"
    if result != "" and i == kol - 1:
        print(result)
    elif i == kol-1 and result == "" and pob == 0:
        print("Draw")
