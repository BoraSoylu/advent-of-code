with open('./input.txt','r') as f:
    lines = f.readlines()
    
max_elf = 0
current_elf = 0

for i in range(len(lines)):
  if (lines[i] == '\n'):
    current_elf = 0
  else: current_elf = current_elf + int(lines[i].strip('\n'))
  if (current_elf > max_elf):
    max_elf = current_elf

print(max_elf)
