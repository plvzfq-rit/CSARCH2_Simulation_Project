![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/986d5639-fe80-4e2f-95ca-d717382f4610)# CSARCH2_Simulation_Project

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

## File outputs
An option is provided for results to be saved in an external text file ```output.txt```; this would be located in the project folder. Previous saved results would not be overwritten.

## Problems Encountered
Problems were initially encountered with Javascript's limited ability to represent beyond numbers with a factor of 10^308. This led to the use of an external library ```decimal.js```, to aid in representing
the numbers in memory. Use of Flask and Python was considered; however, the steep learning curve and negligible gains lead to the abandonment of the idea. Issues were also faced when trying to output values
into a .txt file from the web application. Nevertheless, a module within node.js was found (```fs```); it aided in accomplishing the task.

## Screenshots
Input: 0
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/c5eaa820-2203-4ecb-8b96-436215430c7e)
Input: e (NAN)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/651b20d8-f093-459a-ab02-fca9decc4f12)
Input: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 \
(Infinity Exponent)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/f1db19ce-495e-4abe-802d-22609f3ba06d)
Input: -10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

(Negative Infinity Exponent)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/83265c19-708a-4157-99a5-5a40d5d33e1b)


<put screeshots here + label>

## Acknowledgements
This simulation project is made in partial fulfillment for the requirements of a degree in Computer Science.
Two open source projects were used to aid in making this application: ```decimal.js```, for representing large numbers that vanilla Javascript could not, and ```express``` for routing.
