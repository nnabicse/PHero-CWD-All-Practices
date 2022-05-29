const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.send("I can code node now & then");
});


const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'shabnur', email: 'shabnur@gmail.com', phone: '0178888888' },
    { id: 3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'bobita', email: 'bobita@gmail.com', phone: '0178888888' },
    { id: 5, name: 'kobori', email: 'kobori@gmail.com', phone: '0178888888' },
    { id: 6, name: 'priya', email: 'priya@gmail.com', phone: '0178888888' },
    { id: 7, name: 'papia', email: 'papia@gmail.com', phone: '0178888888' }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])

})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('post method success')
})

app.listen(port, () => {
    console.log("Listening to Port", port);
})