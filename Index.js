const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; // Set port number


// Mock data
let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
    {
        'joke': 'Why did the student eat his homework?',
        'response': 'Because the teacher told him it was a piece of cake!'
    },
    {
        'joke': 'What kind of tree fits in your hand?',
        'response': 'A palm tree'
    },
    {
        'joke': 'What is worse than raining cats and dogs?',
        'response': 'Hailing taxis'
    }
];
let lameJoke = [
    {
        'joke': 'Which bear is the most condescending?',
        'response': 'Pan-DUH'
    },
    {
        'joke': 'What would the Terminator be called in his retirement?',
        'response': 'The Exterminator'
    }
];

// Middleware
app.use(bodyParser.json());

// Endpoint to get jokebook categories
app.get('/jokebook/categories', (req, res) => {
    res.json(categories);
});

// Endpoint to get jokes in a category
app.get('/jokebook/joke/:category', (req, res) => {
    const category = req.params.category;
    const limit = req.query.limit;

    if (!categories.includes(category)) {
        res.status(404).json({ error: `no category listed for ${category}` });
        return;
    }

    let jokes = category === 'funnyJoke' ? funnyJoke : lameJoke;

    if (limit) {
        jokes = jokes.slice(0, limit);
    }

    res.json(jokes);
});

// Endpoint to add a new joke
app.post('/jokebook/joke/new', (req, res) => {
    const { category, joke, response } = req.body;

    if (!category || !joke || !response || !categories.includes(category)) {
        res.status(400).json({ error: 'invalid or insufficient user input' });
        return;
    }

    const newJoke = { joke, response };

    if (category === 'funnyJoke') {
        funnyJoke.push(newJoke);
    } else {
        lameJoke.push(newJoke);
    }

    res.json(category === 'funnyJoke' ? funnyJoke : lameJoke);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});