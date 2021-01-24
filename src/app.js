const express = require('express');
const app = express();
const phrases = require('./frases');

// Static files and template engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Routes
app.get('*', (req, res) => {
    res.status(404).render('404', { message: phrases[Math.floor(Math.random() * phrases.length)] });
});

// Server
app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000') });