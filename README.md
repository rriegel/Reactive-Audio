# Reactive-audio
# Author: Ryan Riegel


Reactive Audio:
Create simple melody patterns with piano notes! Save and load your projects to build inspiration.

Technologies:
Mongo, Express, React, Node, Tonejs

HOW TO USE:

-- HOW TO RUN

Fork and Clone the repository to your local machine
In the root directory of the repo, run the following commands concurrently:
  1. npm run build (to bundle and minify the React code)
  2. npm start (to start the Express server)

Navigate to localhost:8001 in the browser of your choice

-- THE SEQUENCER

Upon loading the page, the use has access to a sequencer grid, as well as fields to enter note and octave values.
Press the 'Start' button to begin the sequencer and add / modify notes as you go!
The sequencer will automatically update the pattern and notes as you edit them.
To stop the sequencer, simply press the 'Stop' button.

-- SAVE YOUR PROJECT

To save your idea, give it a name in the top field, and press 'Save'.
Your project will be added to the list of projects at the bottom of the screen.


-- YOUR PROJECTS

To load a previously saved project, find it in the list and press the 'Load' button. This will load the last save state of that project.
If your project name matches a previous project, it will overwrite that project.
Delete a project from your list by pressing the 'Delete' button


