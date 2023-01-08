# Rock Paper Scissor Lizard Scissor Game
(Developer Diego Moro)

![Mockup image](docs/mockup.png)

[Live webpage](https://diegomoro415.github.io/Rock-Paper-Scissor-Lizard-Spock-Game/)

## Table Of Content

1. [Project Goals](#project-golas)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requrements and Expectations](#user-requrements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performing-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals
    - The site’s users want to play an online game that has elements of chance.

### Site Owner Goals
    - The site’s goal is to provide a challenging game to entertain online users.
    - Obtain productive feedback to further adjustments and user experience improvement.
    - Collect user's data such as name, email.

## User Experience

### Target Audience
    - Users that are looking for rock, paper scissor game.
    - Users that are looking for a Quiz game.
    - Users that are looking for games to be entertained.

### User Requrements and Expectations
    - A simple and intuitive navigation system.
    - Links and functions that work as expected.
    - Good presentation and a visually appealing design regardless of screen size.
    - Simple content that the user can skim read.
    - Accessibility

### User Stories

#### First-time User 
1. As a first time user, I want to play rock-paper scissor game.
2. As a first time user, I want to play a quiz game.

#### Returning User
3. As a returning user, I want to play rock paper scissor game, see my results and try to improve.
4. As a returnign user, I want to play a quiz game, see my results and try to improve.
5. As a returning user, I want to give feedback for ideas and improvement.

#### Site Owner 
6. As the site owner, I want users to be challenged by the games and always try to improve your score.
7. As the site owner, I want users to fill feedback form provide Name, email and feedback message.

## Design

### Design Choices
The webpage was designed to entertain by providing challenge games, easy navigation, a good presentation and a visually appealing.
### Colour
To narrow down the colours I used Canva Color Palette Generator. After deciding on the colour I tested them on WebAIM to make sure the contrast between them was right.
<br>

![Colour Scheme](docs/color_palette.png)

### Fonts
Rubik Vinyl was used for the header and Asap was used for the body. Both fonts are considered dyslexia friendly.

### Structure
The page is structured in a well know, recognizable, user friendly, and easy to learn way. at the top of the page contains navigation link to game, quiz and feedback page.
The website consists of three separate pages: 
- A homepage where user can play Rock Paper Scissor Lizar and spock Game against computer.
- A quiz page where user can play a quiz game with 15 questions.
- A feedback page that contains a form where users can fill with your name, email and feedback message.

### Wireframes

<details><summary>Game</summary>
<img src="docs/wireframes/index_wireframe.png">
</details>
<details><summary>Quiz</summary>
<img src="docs/wireframes/quiz_wireframe.png">
</details>
<details><summary>Feedback</summary>
<img src="docs/wireframes/feedback_wireframe.png">
</details>
<details><summary>404 Error</summary>
<img src="docs/wireframes/404_wireframe.png">
</details>

## Technologies Used

### Languages
- HTML
- CSS
- JAVASCRIPT

### Frameworks & Tools
- Bootstrap 4 cdn
- Git
- GitHub
- Gitpod
- Figma
- Google Fonts
- Canva Color Generator
- Email Js

## Features 
The page consists of three pages and twelve features.

### Game Page Header
- Featured name of the game.
- The navbar with links to game, quiz and feedback page.
- It allows users to easily navigate the page.
- User stories covered: 1 and 2. 

![Game Header](docs/features/game_header.png)

### Game Score
- This feature contain score increasing by one everytime player wins or when computer wins.
- The score goes till 5, the game is over when player or computer score 5 first.
- Player 1 is indentified by blue color on the left side of the screen.
- Computer is indentified by red  color on the right side of the screen.
- User stories covered: 3 and 6.

![Game Score](docs/features/game_score.png)

### Game Display 
- It displays the image that the user chose.
- It display the image that the computer random generated.
- Display image for 1 second than image disapers to get ready for the next move.
- User stories covered: 1 and 3.

![Game Display](docs/features/game_display.png)

### Display Moves
- It contains 5 buttons for (Rock, Paper, Scissor, Lizard, Spock).
- After the users pick a move user need to press the PLAY button just bellow the moves button.
- User stories covered: 1 and 3.

![Display Moves](docs/features/game_moves.png)



### Winner Screen
- It pop-up when user reach 5 wins.
- Contains a Text saying that user wins and a button to play again.
- User stories covered: 3 and 6.

![Winner Screen](docs/features/winner_screen.png)

### Loser Screen
- It pop-up when computer reach 5 wins.
- Contains a text saying that user lose and a button to try again.
- User stories covered: 3 and 6.

![Loser Screen](docs/features/loser_screen.png)

### Quiz Header
- Featured name of the game.
- The navbar with links to game, quiz and feedback page.
- It allows users to easily navigate the page.
- User stories covered: 2 and 4.

![Quiz Header](docs/features/feedback_header.png)

### Quiz answers
- It contains 4 buttons where user can chose.
- User stories covered: 2 and 4.

![Quiz Answers](docs/features/quiz_answers.png)

### Quiz Score 
- It show up the users result after answer all question.
- Contains a button to play again and star over.
- User stories covered: 2, 4 and 6.

![Quiz Score](docs/features/quiz_score.png)

### Feedback Header
- Featured name of the game.
- The navbar with links to game, quiz and feedback page.
- It allows users to easily navigate the page.
- User stories covered: 5.

![Feedback Header](docs/features/feedback_header.png)

### Feedback Form
- Contains a form where the user can fill with name, email and give feedback for improvements and ideas.
- User stories covered: 5 and 7.

![Feedback Form](docs/features/feedback_form.png)

## Validation

### HTML Validation
The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors no warnings to show.
<details><summary>Game</summary>
<img src="docs/validations/index_validation.png">
</details>
<details><summary>Quiz</summary>
<img src="docs/validations/quiz_validation.png">
</details>
<details><summary>Feedback</summary>
<img src="docs/validations/feedback_validation.png">
</details>
<details><summary>404 Error</summary>
<img src="docs/validations/404_validation.png">
</details>

### CSS Validation
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.
No Errors are found.
<details><summary>Css Validation</summary>
<img src="docs/validations/css_validation.png">
</details>

### Accessibility
The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. All pages pass with 0 errors.
<details><summary>Game</summary>
<img src="docs/validations/index_accessibility.png">
</details>
<details><summary>Quiz</summary>
<img src="docs/validations/quiz_accessibility.png">
</details>
<details><summary>Feedback</summary>
<img src="docs/validations/feedback_accessibility.png">
</details>
<details><summary>404 Error</summary>
<img src="docs/validations/404_accessibility.png">
</details>

### Performance 
Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website. 

<details><summary>Game</summary>
<img src="docs/validations/index_lighthouse.png">
<img src="docs/validations/index_mobile_lighthouse.png">
</details>
<details><summary>Quiz</summary>
<img src="docs/validations/quiz_lighthouse.png">
<img src="docs/validations/quiz_mobile_lighthouse.png">
</details>
<details><summary>Feedback</summary>
<img src="docs/validations/feedback_lighthouse.png">
<img src="docs/validations/feedback_mobile_lighthouse.png">
</details>
<details><summary>404 Error</summary>
<img src="docs/validations/404_lighthouse.png">
<img src="docs/validations/404_mobile_lighthouse.png">
</details>

### Performing tests on various devices 
The website was tested on the following devices:
- Iphone XS
- Ipad Pro
- Alienware R3 15

### Browser compatability
The website was tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Egde
- Safari

### Testing user stories

1. As a first time user, I want to play rock-paper-scissor game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game Header | Navigate to Game page | Rock-Paper-Scissor-Lizard-Spock game against computer | Works as expected |
| Game Score | Display user and computer score | Score finish after a player reachs 5 wins | Works as expected |
| Game Display | Displays the move image the user chose to play | Chose a move to play to try to beat computer | Works as expected |
| Game Moves | Choose moves to play the game | Rock-Paper-Scissor-Lizard-Spock game against computer | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user_testing/user_test_game_header.png">
<img src="docs/user_testing/user_test_game_score.png">
<img src="docs/user_testing/user_test_game_display.png">
<img src="docs/user_testing/user_test_game_moves.png">
</details>

2. As a first time user, I want to play a quiz game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Quiz Header | Navigate to quiz page | Play a quiz game with multiple choice| Works as expected |
| Quiz Answers | Four buttons that user can choose one | Four option contains one right answer | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user_testing/user_test_quiz_header.png">
<img src="docs/user_testing/user_test_quiz_answer.png">
</details>

3. As a returning user, I want to play rock paper scissor game, see my results and try to improve.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game Score | Display user and computer score | Score finish after a player reachs 5 wins | Works as expected |
| Winner Screen| Display a winner message after user reach 5 wins | Victory message and a Play Again button | Works as expected |
| Loser Screen | Display a loser message after computer reach 5 wins | Lose message and a play again button | Works as expected | 

<details><summary>Screenshots</summary>
<img src="docs/user_testing/user_test_game_score.png">
<img src="docs/user_testing/user_test_winner_screen.png">
<img src="docs/user_testing/user_test_loser_screen.png">
</details>

