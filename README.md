# Mile-High Movies

- [Project Spec](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)

## Contributors

- [William McGuire](https://github.com/wmcguire18)
- [Paul Chambers](https://github.com/PaulTimothyChambers)

## Abstract

This application is a spoof of streaming services such as Netflix and Hulu, mixed with a tiny dash of Rotten Tomatoes.

## Snapshots of Application

Dashboard View:

![landing page/dashboard](https://imgur.com/1vWTzNx)

Single Movie Details View:

![single movie details](https://imgur.com/3rGzB6S)


1. The landing page of the app is a dashboard view (of sorts), from which the the user can:
    - select a movie to "watch" from one of three catagories:
       1) A list of movies that they have previously watched
       2) A list of movies that they are planning to watch
       3) A list of all the available movies on the app
2. Once a movie selection has been made, the user will be taken to a new URL, one that displays detailed information on the selected film
3. When in this detailed view, the user may add the displayed movie to their "have watched" or "will watch" categories (which will also update the appropriate dashboard category in order to display the movie on the user's dashboard), or the user may choose to do neither and simply return to their unchanged dashboard
4. In addition to the aforementioned functionality within the detailed movie view, the user may also choose to view one or more of the promotional videos that have been embedded within the page

## Technologies

- Mocha
- Chai
- JavaScript
- CSS
- Fetch API
- ESlint
- React
- Router
- Cypress
- JSX

## Wins

- Implementing a robust Cypress testing suite, including the successful interception of the various fetch API calls
- Refactoring to incorporate Router midway through the project

## Challenges

- Team member coming down with Covid in final stretch

## Install/ Set Up Instructions

1. Clone down this repository.
  ```
  git clone https://github.com/wmcguire18/rancidtomatillos
  ```
2. In your terminal, run:
  ```
  npm install
  npm start
  ```
3. Enter the following url in your browser: http://localhost:3000/
4. Explore the website.

## Future Features

- Refactor for SCSS
- Refactor file structure (all assets in assets directory, etc.)
