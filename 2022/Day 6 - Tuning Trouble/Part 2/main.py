def main():
    with open("./input.txt", "r") as f:
        input = f.readlines()[0]

    marker_length = 14
    current_index = 0
    char_arr = []

    for i in range(marker_length):
        char_arr.append(input[i])

    while not checkUnique(char_arr, marker_length):
        shiftLetters(input, char_arr, marker_length, current_index)
        current_index = current_index + 1
    print(char_arr)
    print(current_index + marker_length)


def shiftLetters(input: str, letters: list, marker_length: int, current_index: int):
    for i in range(marker_length - 1):
        letters[i] = letters[i + 1]
    letters[marker_length - 1] = input[marker_length + current_index]
    return


def checkUnique(letters: list, marker_length: int):
    for i in range(marker_length - 1):
        current = letters[i]
        for j in range(i + 1, marker_length):
            if current == letters[j]:
                return False
    return True


if __name__ == "__main__":
    main()
