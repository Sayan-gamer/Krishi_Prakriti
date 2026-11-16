const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// This single line serves index.html, page1.html, page2.html, and any assets automatically
app.use(express.static(path.join(__dirname)));


const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-contact', (req, res) => {
    const { purpose, service, name, company, email, phone, message } = req.body;
    
    console.log("New Submission from:", name);
    console.log("They want to:", purpose);
    console.log("They want to:", service);
    console.log("They want to:", company);
    console.log("They want to:", email);
    console.log("They want to:", phone);
    console.log("They want to:", message);
    
    // Here you would use Nodemailer to send the email to yourself
    // and/or insert the data into a database like MongoDB or MySQL.
    
	res.sendFile(path.join(__dirname, 'success.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running!`);
    console.log(`- Home:  http://localhost:${PORT}/`);
    console.log(`- Page1: http://localhost:${PORT}/page1.html`);
    console.log(`- Page2: http://localhost:${PORT}/page2.html`);
});


