const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 3000;

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, content TEXT)');
});

app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('/notes', (req, res) => {
  db.all('SELECT * FROM notes', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/notes', (req, res) => {
  const { content } = req.body;
  db.run('INSERT INTO notes (content) VALUES (?)', [content], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Notița a fost creată', id: this.lastID });
  });
});

app.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  db.run('UPDATE notes SET content = ? WHERE id = ?', [content, id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Notița a fost actualizată' });
  });
});

app.listen(port, () => {
  console.log(`Serverul ascultă pe portul ${port}`);
});