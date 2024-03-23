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

## File outputs
An option is provided for results to be saved in an external text file ```output.txt```; this would be located in the project folder. Previous saved results would not be overwritten.

## Problems Encountered
Problems were initially encountered with Javascript's limited ability to represent beyond numbers with a factor of 10^308. This led to the use of an external library ```decimal.js```, to aid in representing
the numbers in memory. Use of Flask and Python was considered; however, the steep learning curve and negligible gains lead to the abandonment of the idea. Issues were also faced when trying to output values
into a .txt file from the web application. Nevertheless, a module within node.js was found (```fs```); it aided in accomplishing the task.

## Screenshots


Input: 0
(0)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/c5eaa820-2203-4ecb-8b96-436215430c7e)


Input: e 
(NAN)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/651b20d8-f093-459a-ab02-fca9decc4f12)


Input: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 \
(Infinity Exponent)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/f1db19ce-495e-4abe-802d-22609f3ba06d)


Input: -10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
(Negative Infinity Exponent)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/83265c19-708a-4157-99a5-5a40d5d33e1b)


Input: 9999999999999999000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
(Maximum Magnitude)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/18ca9381-39cf-438d-aab0-1631a3d414a0)


Input: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
(Minimum Magnitude)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/16ed6331-4f5f-40fb-a056-1d048fd24bb7)


Input: -9999999999999999000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
(Negative Max Magnitude)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/cc8041f1-cecd-4b04-9b1d-95439c571ed3)


Input: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
(Negative Min Magnitude)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/962450d5-18b4-4e33-8c63-dbbd38cd7847)


Input: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
(Below Min Mag)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/023ebbe4-77dd-4c16-9b17-46f10f7a69bb)


Input:
-0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
(Neg Below Min Mag)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/9df02497-190d-45df-bbea-19cf5a93497a)


Rounding Cases: 
Input: 3.1415926535897955
(Gaussian Rounding)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/fdf44f9f-903a-437a-816a-586488120cec)


Input: 3.1415926535897955
(Truncation)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/6a815f59-cb7f-416e-a0b0-d6c2670289da)


Input: 3.1415926535897955
(Floor)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/6d2fd665-a490-46fe-808e-119e2c21a888)


Input: 3.1415926535897955
(Ceiling)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/62ccd76c-251c-43a5-9dc5-2f48902b0e47)


Input: 3.1415926535897955
(Arithmetic Rounding)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/4b48794d-30cb-4177-a489-99d2f064de08)


Input: -3.1415926535897955
(Gaussian Rounding)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/7ed40c7f-08b9-4874-ae8d-357ffe1231ac)


Input: -3.1415926535897955
(Truncation)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/2f2c36a5-862e-4785-bbd8-13328cde50f6)


Input: -3.1415926535897955
(Floor)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/c5477eda-33dd-4f6d-808c-6b82efc3775f)


Input: -3.1415926535897955
(Ceiling)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/43b3b74e-4c49-4fd7-9526-abec90f5563b)


Input: -3.1415926535897955
(Arithmetic Rounding)
![image](https://github.com/plvzfq-rit/CSARCH2_Simulation_Project/assets/67249789/0f88a5dd-7c9e-4cc3-ac74-bc0eaed4f2ee)

## Acknowledgements
This simulation project is made in partial fulfillment for the requirements of a degree in Computer Science.
Two open source projects were used to aid in making this application: ```decimal.js```, for representing large numbers that vanilla Javascript could not, and ```express``` for routing.
