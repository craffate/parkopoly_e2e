# Parkopoly's test suites

This package contains a bunch of different tests for [Parkopoly](http://www.parkopoly.fr "Parkopoly's official website").

## Getting Started

1. First, you will need a working installation of [Node.js](https://nodejs.org/en/ "Node.js' official website") (LTS version is heavily recommended).
	You can check that Node.js is correctly installed by opening a terminal and typing:
	```
	node --version
	```
	The currently installed version will be displayed if the installation succeeded.

2. Update your node package manager (npm) version by opening a terminal and typing:
	```
	npm install npm --global
	```
	If your system refuses to update, it's most likely because you're not allowed to edit npm's folders,
	this can be fixed by either changing npm's package installation folder or by forcing the installation using:
	```
	sudo npm install npm --global
	```
	You will be prompted to enter your password if your current session has one.

3. Clone this repository using your favorite IDE or a terminal using:
	```
	git clone
	```

4. Set the required environment variables `$USR_E2E` and `$PWD_E2E` with the username and password you want to use respectively.
	If you have no idea of how to do it, you can follow this [quick tutorial](https://gist.github.com/craffate/04838770a7fc3a271d3a355524e1315d).
	If you don't know what shell you're currently using, you're probably using Bash.

### Installing

1. Open a terminal, navigate to the project repository and type:
	```
	npm install
	```
	All the required packages will automatically be installed locally.

2. Update the webdrivers by typing:
	```
	npm run wd_update_old
	```
	Optionally, you can update Internet Explorer on a Windows machine by typing:
	```
	npm run wd_update_ie
	```

### How to use

1. Open a terminal, navigate to the project repository and type:
	```
	npm run wd_start_old
	```

2. Open __another__ terminal, navigate to the project repository and type one of the following commands:

	| Command              	| What it does                              	|
	|----------------------	|-------------------------------------------	|
	| npm run pt_start     	| Runs everything							 	|
	| npm run pt_cft       	| Runs all the complete feature tests (CFT)		|
	| npm run pt_scenarios 	| Runs all the scenarios						|
	| npm run reports_clear | Clears the generated reports					|
