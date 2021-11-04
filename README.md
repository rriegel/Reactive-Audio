# 🎵 Reactive Audio 🎵

## 🎹 Create simple melody patterns with piano notes
### 🤔 Save and load your projects to build inspiration

![Header](https://github.com/rriegel/Reactive-Audio/blob/main/assets/screenshot-11042021.png)
Screenshot of UI last updated 11/03/2021

# HOW TO USE:

### RUN THE APP

Fork and Clone the repository to your local machine
In the root directory of the repo, run the following commands concurrently:
  1. `npm run build` (to bundle and minify)
  2. `npm start` (to start Express server)

Navigate to localhost:8001 in the browser


### THE SEQUENCER

Upon loading the page, the user has access to a sequencer grid, as well as fields to enter note and octave values.
Press the 'Start' button to begin the sequencer and add / modify notes as you go!
The sequencer will automatically update the pattern and notes as you edit them.
To stop the sequencer, press the 'Stop' button.


### SAVE YOUR PROJECT

To save your idea, give it a name in the top field, and press 'Save'.
Your project will be added to the list of projects at the bottom of the screen.


#### YOUR PROJECTS

To load a previously saved project, find it in the list and press 'Load'. This will load the last save state of that project.
If your project name matches a previous project, it will overwrite.
Delete a project from your list by pressing 'Delete'.

## 🔨 Technologies

[![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![React](https://img.shields.io/badge/ReactJS-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![ExpressJS](https://img.shields.io/badge/Express-FFFFFF?logo=express&logoColor=black&style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-439543?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/)
[![tone.js](https://img.shields.io/badge/tone.js-F734D7?style=for-the-badge)](https://tonejs.github.io/)

## 🖼 UI Previews

![Select sequencer pads](https://github.com/rriegel/Reactive-Audio/blob/main/assets/UI1.gif)
![Play the sequencer](https://github.com/rriegel/Reactive-Audio/blob/main/assets/UI2.gif)
![Edit note values](https://github.com/rriegel/Reactive-Audio/blob/main/assets/UI3.gif)
![Save your project](https://github.com/rriegel/Reactive-Audio/blob/main/assets/UI4.gif)