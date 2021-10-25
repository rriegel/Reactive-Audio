# Reactive-audio

## Create simple melody patterns with piano notes
### Save and load your projects to build inspiration

![Header](https://github.com/rriegel/Reactive-Audio/blob/main/assets/screenshot-10242021.png "Header")
Screenshot of UI last updated 10/24/2021

## Technologies:

[![](https://img.shields.io/badge/ReactJS-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![](https://img.shields.io/badge/Express-FFFFFF?logo=express&logoColor=black&style=for-the-badge)](https://expressjs.com/)
[![](https://img.shields.io/badge/MongoDB-439543?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/)
[![](https://img.shields.io/badge/tone.js-F734D7?style=for-the-badge)](https://tonejs.github.io/)

# HOW TO USE:

#### HOW TO RUN

Fork and Clone the repository to your local machine
In the root directory of the repo, run the following commands concurrently:
  1. `npm run build` (to bundle and minify)
  2. `npm start` (to start Express server)

Navigate to localhost:8001 in the browser

#### THE SEQUENCER

Upon loading the page, the user has access to a sequencer grid, as well as fields to enter note and octave values.
Press the 'Start' button to begin the sequencer and add / modify notes as you go!
The sequencer will automatically update the pattern and notes as you edit them.
To stop the sequencer, simply press the 'Stop' button.


#### SAVE YOUR PROJECT

To save your idea, give it a name in the top field, and press 'Save'.
Your project will be added to the list of projects at the bottom of the screen.


#### YOUR PROJECTS

To load a previously saved project, find it in the list and press the 'Load' button. This will load the last save state of that project.
If your project name matches a previous project, it will overwrite that project.
Delete a project from your list by pressing the 'Delete' button


