#batchRename.py

from os import listdir, rename
from os.path import join, isdir
from readline import parse_and_bind

def main():
	print("Batch Rename - Developed by Telmo H. V. Silva")
	print("-" * 50)

	parse_and_bind("control-v: paste")

	dir = input("Paste the directory here: ")

	if(not isdir(dir)):
		print("Invalid directory.")
		return

	oldList = listdir(dir)
	newList = list()

	oldText = input("Paste the text to be replaced: ")
	newText = input("Paste the text to replace it: ")

	i = 0
	while(i < len(oldList)):
		newList.append(oldList[i].replace(oldText, newText))
		i += 1

	i = 0
	while(i < len(oldList)):
		oldFile = join(dir, oldList[i])
		newFile = join(dir, newList[i])

		rename(oldFile, newFile)

		i += 1

	print("Done!")
	return

main()
