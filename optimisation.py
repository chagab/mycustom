#!/usr/local/bin/python3.5
# -*-coding:Utf-8 -*
import os

for root, dirs, files in os.walk("./"):
	for file in files:
		if file.endswith(".html"):
			 print(os.path.join(root, file))
		if file.endswith("js") : 
			print(os.path.join(root, file))
		if file.endswith("css") : 
			print(os.path.join(root, file))
		if file.endswith("less") : 
			print(os.path.join(root, file))