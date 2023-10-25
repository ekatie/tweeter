# Tweeter Project

Tweeter is a delightful single-page Twitter clone, crafted to showcase my proficiency in HTML, CSS, JS, jQuery, and AJAX for front-end development, along with Node and Express for back-end wizardry.

## Table of Contents

- [Installation](#installation)
- [Key Components](#key-components)
- [Dependencies](#dependencies)
- [External Resources](#external-resources)
- [JavaScript Libraries](#javascript-libraries)

## Installation

1. **Clone the Repository**: [https://github.com/ekatie/tweeter/](https://github.com/ekatie/tweeter/)
2. **Install Dependencies**: Use `npm install`.
3. **Start the Server**:
   - For production: Use `npm start`.
   - For local development with automatic server restart using Nodemon: Use `npm run local`.
4. **Sass Compilation (Optional)**: Use `npm run sass-watch` if you make changes to Sass files and need to recompile CSS.
5. **Access the Application**: Go to [http://localhost:8080/](http://localhost:8080/) in your browser. (You can change the port configuration in your server code if needed.)

## Key Components

- **HTML Structure**: The project's HTML structure includes a fixed top navigation bar, a main content section for displaying tweets, and a tweet composition form.

- **JavaScript Functionality**:
   1. **Toggle New Tweet Form**: Users can toggle the visibility of the tweet composition form from the top navigation bar.
   2. **Jump-to-Top Icon**: An "up" arrow icon allows users to quickly return to the top of the page as they scroll.
   3. **Form Validation**: The project validates tweet content to prevent empty tweets or tweets exceeding 140 characters. User-friendly error messages are displayed as needed.
   4. **Tweet Submission**: New tweets are submitted via a form and dynamically added to the list of tweets without page reload.
   5. **XSS Protection**: Tweet content is sanitized to protect against cross-site scripting (XSS) attacks.

- **CSS Styles**: Various CSS styles are applied to enhance the visual appeal and layout of the application.
 - *Responsive Design*: The project incorporates responsive design to ensure a seamless user experience on both desktop and smaller screens.

## Dependencies

- **Node.js**: ^5.10.x
  - [Node.js](https://nodejs.org/): Runtime environment.
- **body-parser**: ^1.15.2
  - [body-parser](https://www.npmjs.com/package/body-parser): HTTP request data parsing.
- **chance**: ^1.0.2
  - [chance](https://www.npmjs.com/package/chance): Random data generation.
- **express**: ^4.13.4
  - [express](https://www.npmjs.com/package/express): Web framework for Node.js.
- **md5**: ^2.1.0
  - [md5](https://www.npmjs.com/package/md5): Data hashing.
- **timeago.js**: ^4.0.2
  - [timeago.js](https://www.npmjs.com/package/timeago.js): Timestamp formatting.

### External Resources

- **normalize.css**: [normalize.css](https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css): Consistent styling.
- **Font Awesome**: [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css): Icon library.
- **Sass**: [Sass](https://sass-lang.com/): CSS preprocessor for advanced styling.

### JavaScript Libraries

- **jQuery**: [jQuery](https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js): Dynamic functionality.
- **Timeago.js**: [Timeago.js](https://cdnjs.cloudflare.com/ajax/libs/timeago.js/4.0.2/timeago.min.js): Real-time timestamps.

## Screenshots and Demos

Desktop View Snapshot  
<img src="https://github.com/ekatie/tweeter/blob/main/media/screenshot-desktop.png" width="400">  

Mobile View Snapshot  
<img src="https://github.com/ekatie/tweeter/blob/main/media/screenshot-mobile.png" width="400">  

Responsive Design Demo  
![GIF of responsive design from desktop to mobile view](https://github.com/ekatie/tweeter/blob/main/media/responsive-design.gif)  

Functionality Demo  
![GIF of main functionality and various interactive components](https://github.com/ekatie/tweeter/blob/main/media/desktop-tweeter.gif)  