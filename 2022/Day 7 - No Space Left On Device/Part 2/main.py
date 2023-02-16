def main():
    input = readInput()
    current_dir = "/"
    all = []    
    for line in input:
        current_dir = handleCd(current_dir, line)
        if line[0] == "$":
            continue
        entity = handleEntity(current_dir,line)
        if entityExists(entity[0], all):
            continue
        all.append(entity)
        
    all = calculateDirs(all)
    
    sum = 0
    for i in all:
        if i[0][-2:] == '$/':
            continue
        sum = sum + i[1]
    space_needed = 30000000
    total_space = 70000000
    now_free = total_space - sum
    lowest = 9999999999
    delete_dir = ''
    for i in all:
        if not i[0][-2:] == '$/':
            continue     
        if now_free + i[1] < space_needed:
            continue
        if i[1] > lowest:
            continue
        lowest = i[1]
    print(f'To delete {lowest}')
    print(f'Now free {now_free}')
    print(f'Free after deletion {lowest+now_free}')
          
    
def calculateDirs(arr:list):
    for index, dir in enumerate(arr):
        if not dir[0][-2:] == '$/':
            continue
        arr[index] = calculateSingleDir(arr,dir[0])
        
    return arr

def calculateSingleDir(arr:list, dir_name:str):
    size = 0
    for entity in arr:
        if dir_name not in entity[0]:
            continue
        if entity[0][-2:] == '$/':
            continue
        size = size + entity[1]
    return [dir_name,size]
    
def entityExists(name:str,arr:list):
    for entity in arr:
        if entity[0] == name:
            return True
    return False
        
def handleEntity(current_dir: str, command: str):
    if command[0:3] == 'dir':
        return_arr = [f'{current_dir}{command[4:-1]}$/',-1]
        return return_arr
    
    split_command = command.split()
    return_arr = [f'{current_dir}{split_command[1]}',int(split_command[0])]
    return return_arr
    

def handleCd(current_dir: str, command: str):
    if not command[0] == "$":
        return current_dir
    if command == "$ ls\n":
        return current_dir
    if command == "$ cd /\n":
        return "/"
    if command == "$ cd ..\n":
        split_current_dir = current_dir.split("/")
        return_dir = "/"
        for i in range(1,len(split_current_dir) - 2):
            return_dir = f"{return_dir}{split_current_dir[i]}/"
        return return_dir
    if command[0:4] == "$ cd":
        cd_to = command[5:-1]
        return_dir = f"{current_dir}{cd_to}$/"
        return return_dir
    return current_dir


def readInput():
    with open("./input.txt", "r") as f:
        return f.readlines()


if __name__ == "__main__":
    main()
