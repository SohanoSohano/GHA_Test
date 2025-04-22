// Import the built-in Node.js HTTP module
const http = require('http');

// Define the port the server will listen on
// Use the environment variable PORT if available (common for hosting platforms), otherwise default to 3000
const PORT = process.env.PORT || 3000;

// Define the HTML content to be served
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Node.js Website</title>
    <style>
        body {
            font-family: sans-serif;
            background-color: #f0f0f0;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        .container {
            background-color: #fff;
            padding: 2em;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
        }
        h1 {
            color: #007bff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome!</h1>
        <p>Current time on server: ${new Date().toLocaleTimeString()}</p>
    </div>
</body>
</html>
`;

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Log the request URL to the console
    console.log(`Request received for URL: ${req.url}`);

    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send the response body (our HTML content)
    res.end(htmlContent);
});

// Start the server and make it listen on the defined port
server.listen(PORT, () => {
    console.log(`Server is running!`);
    console.log(`Access the website at: http://localhost:${PORT}`);
});
