# Get Jobs Online

A React frontend project that presents typing and transcription job information. It includes separate pages for each job category, email registration forms, and a contact page. The project demonstrates routing, responsive layouts, input validation, and conditional feedback messages.

The forms are frontend demos: successful submission changes the displayed message in React state. There is no backend registration, email delivery, job dashboard, or payment system in this repository.

## Features

- A home page with typing and transcription category cards.
- Job information pages with email validation using `validator`.
- A contact form with a minimum message-length check.
- Desktop navigation and a mobile navigation drawer.
- Responsive layouts and transitions using Material UI.

## Built with

- React 18 and Create React App (`react-scripts` 5).
- React Router 6 for page routing.
- Material UI 5 and Emotion for interface components and styling.
- React Icons for navigation and form icons.
- `validator` for email validation.

## Run locally

You need Node.js and npm installed.

```sh
git clone https://github.com/Bhavesh-28/getjobs.git
cd getjobs
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). Use the navigation bar or mobile drawer to move between pages.

| Route | Page |
| --- | --- |
| `/` | Home and job categories. |
| `/get-typing-jobs` | Typing job information and email form. |
| `/get-transcription-jobs` | Transcription job information and email form. |
| `/contact` | Contact message form. |

## Project structure

| File or directory | Purpose |
| --- | --- |
| `src/index.js` | React entry point and `BrowserRouter` setup. |
| `src/App.js` | Shared page layout and route definitions. |
| `src/components/Home.js` | Category cards and introductory content. |
| `src/components/Typing_jobs.js` | Typing information and registration feedback. |
| `src/components/Transcription_jobs.js` | Transcription information and registration feedback. |
| `src/components/Contact.js` | Contact form validation and feedback. |
| `src/components/Partials/` | Navigation and footer components. |
| `src/styles/common.css` | Shared page styles. |
| `public/` | Static files and the HTML entry template. |

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server. |
| `npm run build` | Create a production build in `build/`. |
| `npm test` | Start the Create React App test runner in watch mode. |

For deployment, serve the contents of `build/` and configure the host to return `index.html` for application routes so direct page visits work with `BrowserRouter`.

## Current limitations

- Registration and contact details are not saved or sent anywhere. Their success messages are only interface state and reset on reload.
- Job rates, earnings, dashboard access, and withdrawal information are static page copy; the corresponding services are not implemented.
- The home page category cards redirect to a hardcoded Heroku address. Use the navigation links or the local routes above when testing locally.
- The contact form checks for at least 100 characters, although its error message says 100 words.
- `src/App.test.js` is the original Create React App starter test. It still expects a "learn react" link and does not supply the router context required by the current app, so it is not a valid test of these pages.
