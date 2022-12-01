with open('./input.txt','r') as f:
    lines = f.readlines()
    
elves = []
current_elf = 0

for i in range(len(lines)):
  if (lines[i] == '\n'):
    elves.append(current_elf) 
    current_elf = 0
  else: current_elf = current_elf + int(lines[i].strip('\n'))
  
elves.sort()
top_three = elves[-3:]
print(sum(top_three))
