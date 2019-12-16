# Demo in netlify [test-task](https://volna-test.netlify.com/)

## Task
Application for registering new users

### The application consists of 3 pages:
1. Customer list
2. Registration form
3. Information about the author

Pages are responsive.

The [mockAPI](https://www.mockapi.io/) service was used for the database.
[db](http://5dc4200613d21600147e5f8f.mockapi.io/users)

#### Customer page
On the clients page, a button is displayed for registering a new client and a list of existing clients in the format: “Full name”, “Registration date”.

#### Registration page
When you click on the button to register a new client, we go to the page with empty fields. Fields: “First name”, “Last name”, “Gender”, “Loyalty program” (possible values: “unavailable”, “plastic card”, “mobile application”; the option “unavailable” is selected by default).
If the “plastic card” option is selected, an additional field for the card entry number is displayed.
When you click on the “Save” button, the client is saved and displayed on the clients page.

When you open the registration page of a new client, a random fact about cats is displayed, with
[meowfactsAPI](https://meowfacts.herokuapp.com/)

#### About page
Consists of author information

## Available Scripts
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


