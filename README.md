# Exact-Space JSON Data Submission and Display

This project demonstrates how to submit JSON data through a web form and then display the submitted data's key-value pairs in an organized manner.

## Levels of assignment
 - Level 1:  [Leve -l](https://github.com/Ayush-kr-shanu/exact-space-assignment/blob/main/Level1.txt)
 - Level 2 and Level 3 : Repo

 ## Deployed Links
 - Deployed link : [Exact-Space](https://exact-space-ayush.onrender.com/)

## Features

- Enter JSON data in a textarea.
- Validate and submit the JSON data to a backend API.
- Display the key-value pairs of the submitted JSON data on the page.

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- Node.js installed on your system.

## Installation

1. Clone this repository or download the provided files.

2. Install the necessary dependencies using npm:

    ```bash
    npm install express cors
    ```

3. Start the backend server:

    ```bash
    node index.js
    ```

4. Open the `index.html` file in a web browser to access the application.

## Usage

1. Open the web application in your browser.

2. Enter valid JSON data into the textarea and click the "Submit" button.

3. If the entered data is valid JSON, it will be sent to the backend API.

4. The backend API will respond with the submitted JSON data.

5. The submitted JSON data's key-value pairs will be displayed below the form.

## Project Structure

- `index.js`: Backend server code using Express and CORS middleware.
- `index.html`: Frontend HTML code containing the form and display area.
- `index.css`: CSS styling for the frontend.
- `index.js`: Frontend JavaScript code for form submission and displaying data.

## Backend Server

The backend server is built using Express.js to handle POST requests with JSON data. CORS middleware is used to allow cross-origin requests.

## Frontend Form

The frontend form allows users to enter JSON data in a textarea and submit it. The data is then validated and sent to the backend API using the Fetch API.

## Displaying Data

The submitted JSON data's key-value pairs are displayed in a structured format below the form. The `displayData` function in the frontend JavaScript dynamically creates HTML elements to display the key-value pairs.

## Acknowledgments

- [SweetAlert2](https://sweetalert2.github.io/) - Used for displaying success and error messages.
- [Express.js](https://expressjs.com/) - Backend server framework.
- [CORS](https://www.npmjs.com/package/cors) - Cross-Origin Resource Sharing middleware for Express.

## Contact

For any questions or feedback, please contact [Ayush kr shanu](https://github.com/Ayush-kr-shanu/).
