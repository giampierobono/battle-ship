# BattleShipApp - Giampiero Bono

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Idea

The main idea was creating a fully customizable game, allowing configuring different values like board size, number of players and number of boats for each player.
To achieve this, saving the full board's cells state would have required using a lot of memory depending on the board size set in configuration (NxN where  N is board size).

Challenge was find a proper data structure that would allow direct access to check if a cell exists and its status (no continuous loops on huge arrays).

So the solution proposed tries to keep track only of "used" cells, storing only players boats positions and players move (like {row: {column: cell_status)).

Having game organized in turns also simplified keeping organized the store saving data in different slices accessible by knowing player and boat number. 

Everything is managed by using ngrx/store and implementing a redux architecture. The current implementation of the app abuse of the state selectors and avoid storing "computable" data 
on the store. So my solution is computing over and over even when not necessary? No, one of the biggest pro of selectors is memoization. If input observable won't emit new value
no new computation will be performed. 

To simplify writing reducers without taking care of ensuring state immutability, I added an util wrapping the ngrx library "on" function used in reducers
inside immer js "produce" call. In this way I was allowed to simply assign value to state without taking care of cloning it at each level.

At each state change, new status is saved on the browser local storage (as BASE-64 string) in order to be able to retrieve status on page refresh and continue the game.
Page guardians have been set up to redirect users to "game" page, no matter what's the route they are trying to reach, if there is a game in progress.

To interrupt a game and go back to the lobby, user must click on "Reset game" button.

All pages are lazy loaded than means that landing on the lobby page, the entire game code has not been served yet. Opening the network table you'll see the request for the
page js file only after clicking on "Start game".

Commitizen, commitlint, husky and lint-staged have been added to ensure every commit was respecting precise standards and tests were not broken by latest changes.

Not the full code have been tested, only main logic related to reducers, effects, selectors and actions representing the core business logic of the application.
I do believe every single line must be tested, but for time constraints I just tested main parts. Because of the way code has been structured, components, for example, 
are only in charge of showing data. 

The algorithm to place players boats is not very smart and probably will easily end in an infinite loop increasing number of players / boats per players. The proper
implementation would probably imply using some graph search algorithm (BF or DF) in order to keep track of position already visited and recognize situation where it's 
impossible to place all them because of lack of space and stop searching. 

Another improvement I would have done is on the app CSS. 

## Clarification

I probably misread one part of the assignment text, specifically the bit describing the number of boats per player and the tetris shapes. 

On the doc I received text was written in this way:
* There should be 4 boats for each team, but they need to be the shapes of tetris blocks
* "L" shape (3 tall, 2 wide at boot), block (2x2), and two lines (4x1)

Since they were two different bullet points I thought first requirement was 4 boats per player, each having tetris block shape, and the other
one was simply specifying the possible shapes, so I randomize boats shapes per player. I assumed "two lines 4x1" was a typo, I didn't think the two points
were actually related. 
