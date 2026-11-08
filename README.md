# User Dashboard Example

A React application developed as a frontend coding assessment for a Frontend Developer position with Canada Drives in April 2021.

The application displays a list of users and provides navigation to individual user detail routes.

## Tech Stack

- React
- JavaScript
- React Router
- Bootstrap
- SCSS

## Features

- User list displaying names, usernames, and email addresses
- Individual user navigation using React Router
- Clickable email links
- Reusable React components for presenting user information

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

## Development Notes

The application was developed over approximately eight hours and tested in Chrome, Firefox, and Safari.

The implementation uses reusable components for presenting user information, including address, company, and contact details.

## Known Limitations

The original assessment was completed under a time constraint, leaving a few areas for improvement:

- **Browser navigation:** Returning to the homepage using the browser's back button does not consistently restore the expected view.
- **Phone links:** Phone numbers containing formatting characters or extensions require additional normalization.
- **Clickable elements:** The original implementation uses a positioning workaround to accommodate an email link alongside the clickable user row.

## Project Context

This repository is retained as an example of my earlier React development work. It has not been modernized to reflect my current development practices.
