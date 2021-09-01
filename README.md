
#  TLVTech react junior home assignment

This project contains an unfinished react web application and a minimal node.js REST-backend.

##  Prerequisites:
You need the following stuff installed on your computer to complete this assignment:
* [git](https://git-scm.com/)
* [node.js](https://nodejs.org)

##  Getting started
All commands should be run from this projects root directory.
1. Clone this project with git.
2. Open a terminal window and run `npm i && npm run server` to start the node.js backend server.
3. Open another terminal window and run `npm start` to start the react web application.
4. Visit `localhost:4444` in your browser.

The web application and the backend server will update automatically when the source files changes. The backend server is running on port `3000`. The server data (i.e. the list of games) will be restored on a server restart.

##  Task
A promising young developer at TLVTech started to write a game library in react, but before finishing the project, they disappeared mysteriously. It's your job to complete the the application!

In the game library, the user should be able to:
* View a list of all games
* Delete an existing game from the list
* Add a new game to the list
* Edit an existing game in the list

Simply put, just start the application and make all the buttons work! The first two points are already done for your convenience. All the server endpoints are described in `server.js`. Complete the functionality in `index.jsx` and `game-service.js`. Snoop the code for comments if you want to learn more!

And lastly, since the page currently looks like a potato, make it sexy using css!

You may solve this task in any way you wish. You may edit, add, move or remove any file or code in the project, and install any new npm-packages should you feel the need to. If you want to add any extra functionality to show off, you may do so as well! For styling you can either use a library or do everything yourself.

## FAQ
#### I don't know react, help!
This task can be solved with basic react knowledge. Check out the [react docs](https://reactjs.org/docs/getting-started.html). It's good for your career!
#### I found a error in this template!
Well done you found a bug! Submit a pull request fixing it 😎
#### How do I submit my finished code?
Preferably, you fork this repository and upload your changes to that fork, and then send us the link. If this is not an option for you for whatever reason, you could send a zip file (do not include the files/folders excluded in the `.gitignore` file).
