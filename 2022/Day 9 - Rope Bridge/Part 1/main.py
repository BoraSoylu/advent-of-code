def main():
    input = readInput()
    print(input)

def readInput():
    with open("./input.txt", "r") as f:
        input = f.readlines()
    for i in range(len(input)):
        input[i] = input[i][:-1]
    print(input)



if __name__ == "__main__":
    main()
