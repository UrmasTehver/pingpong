const express = require('express'); //Impordime express serveri mooduli
const app = express(); // Teeme rakenduse
const path = require('path'); // Kaustade "liitmiseks"

app.use(express.urlencoded({extended:true})); // POST jaoks
app.use(express.json()); // GET jaoks

app.set('views', path.join(__dirname, '../views')); // Kaust "views". Täispikk kaustatee
app.set('view engine', 'ejs'); // Template https://ejs.co/

app.get('/', (req, res) => {
    title = 'Avaleht';
    res.render('index', {title});
    //res.send("Avaleht");
});

// Serveri käivitamine pordil 3000 (üle 1024)
app.listen(3000, () => {
    console.log("Kuulan porti 3000");    
});

