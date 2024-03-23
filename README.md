# CSARCH2_Simulation_Project

## Introduction
A Node.js web application that is used to convert decimal inputs to IEEE754-2008 binary format. Representations are shown in both binary and hexadecimal.
Options to round (round to nearest evens, truncation, ceiling, floor, and arithmetic rounding) are provided for numbers with more than 16 digits.

## How to initialize
Ensure first that ```node.js``` and ```npm``` are both installed in your system. From there, open the folder containing the project in the command line.
Execute the following snippets of code in succession to initialize the ```node.js``` project:
```npm init -y```
then
```npm install express decimal.js --save```
Following that, type in ```node index``` into the command line. The project would now be open on ```localhost:3001```.

## Acknowledgements
This simulation project is made in partial fulfillment for the requirements of a degree in Computer Science.
Two open source projects were used to aid in making this application: ```decimal.js```, for representing large numbers that vanilla Javascript could not, and ```express``` for routing.
