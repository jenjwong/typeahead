# Typeahead

### Technologies

#### Client
* ES6, React

#### Testing
* Jest

---
## Typeahead Dash:
![Typeahead](https://github.com/jenjwong/expenseTrackr/blob/development/client/public/typeahead.png)
---

## Getting Started

To get a copy of the project up and running on your local machine clone the repository and in the root directory execute:
```
npm i
```

Start the development environment by running:
```
npm run start
```

### Client-Side Technologies
To streamline development the project uses [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)

### Features
- provides contextual help explaning supported functions and comparators
- if user enters invalid invalid input typeahead displays a help message with a link to mock-documentation
- uses a reusable regular expressions helper function to precisely match the start of words
- input field always stays in focus so users don't have to click to continue typing
- auto-completes today's date if user starts function with @created_at
- allows users to toggle between choices after initial selection
- links are highlighted and a pointer is used to enhance discorability

## Tests

Typeahead unit tests utility functions with Jest.

To execute tests, in the client directory run:
```
npm run test
```
