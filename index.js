import express from 'express';

const app = express();
const PORT = 5000;



app.get('/Home', (req, res) => {
    res.send("Welcome to my home page");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' }
];

app.get('/user', (req, res) => {
    res.send(users);
});
