# Typeahead

### Technologies

#### Client
* ES6, React

#### Testing
* Jest

---
## Typeahead Dash:
![Typeahead](https://github.com/jenjwong/typeahead/blob/master/public/typeahead.png)
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
- Provides contextual help explaining supported functions and comparators
- If user enters invalid invalid input typeahead displays a help message with a link to mock-documentation
- Uses a reusable regular expressions helper function to precisely match the start of words
- Input field always stays in focus so users don't have to click to continue typing
- Auto-completes today's date if user starts function with @created_at
- Allows users to toggle between choices after initial selection
- Links are highlighted and a pointer is used to enhance discoverability

## Tests

Typeahead unit tests utility functions with Jest.

To execute tests, in the client directory run:
```
npm run test
```
