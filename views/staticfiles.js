// Static files are assets that are sent to the client's web browser as-is, without any modification or processing by the server. 
// These files typically include:

// HTML files: Basic web pages.

// CSS files: Stylesheets that define the look and feel of the web pages.

// JavaScript files: Scripts that add interactivity to web pages.

// Images: Such as PNG, JPEG, SVG, and GIF files.

// Fonts: Web fonts like TTF, OTF, and WOFF.

// To configure "static files" need to follow below steps
// 1. create a folder called "public"
// 2. create 3 folders inside it, image, StyleSheets, javascripts
// 3. configure the express static in script.js file (in this case I use "embededjavascript.js")
// 4. understand the path

// In an Express.jsapplication, you can serve static files using the built-in express.static middleware. Here’s how to do it:

// Create a Directory for Static Files: Create a directory named public (or any name you prefer) in your project root to store your 
// static files (e.g., HTML, CSS, JS, images).

// Place Static Files in the Directory: For example, create an index.html, style.css, and script.js in the public directory.

// Set Up the Static Middleware in Express: Use the express.static middleware to serve static files from the public directory.

const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
