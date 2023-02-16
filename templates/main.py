def main():
    print(readInput())


def readInput():
    with open("./input.txt", "r") as f:
        return f.readlines()


if __name__ == "__main__":
    main()
