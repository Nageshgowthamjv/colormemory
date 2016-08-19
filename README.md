# Color Memory Game

## Demonstration

Visit https://colormemorygame.herokuapp.com for a live demonstration.

## Installation

Follow the steps below to complete the installation:

1. Clone the repository from 
  ```bash
      https://github.com/Nageshgowthamjv/colormemory.git
  ```

2. Navigate into the package using
  ```bash
     $ cd colormemory
  ```

3.  Install the `package.json` available in the project using below command. This will fetch all the dependancy files required for instance setup.
  ```bash
      $ npm install
  ```

4. Lanch the instance using the below url
  ```bash
    http://localhost:3000/
  ```

## Building Local changes

This project is using Grunt for Building and packaging the code. So `Grunt` tasks as available to build locally.

1. To build any local changes in the `Less` files, Use the below command. This will create `style.css`.
  ```bash
    $ grunt less:production
  ```
  
2. In dev-mode, To build any local changes in the `LESS` files, use the below command. This will create `style-dev.css`. Since `index.html` is pointing to `style.css`, we have to change same to point to `style-dev.css`.
  ```bash
    $ grunt less:development
  ```
  
3. To build any `javascript` changes, use the below command.
  ```bash
    $ grunt requirejs
  ```
  
4. To build both `LESS` and `javascript`, use below Command. It will by default pick both.
  ```bash
    $ grunt 
  ```
  
