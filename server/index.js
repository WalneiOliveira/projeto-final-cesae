import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';

// using express to create a server
const app = express();

// using cors to allow the frontend to access the backend
app.use(cors());

// listening to port 8800
app.listen(8800, () => {
  console.log('connected to backend!');
});

//creating a connection to the database
const db = mysql2.createConnection("mysql://root:JwTNduIeTbmOKiUujfMnBKhEkXWSybfO@viaduct.proxy.rlwy.net:41706/railway");

// using express to parse the data
app.use(express.json());

// creating a route to test the connection
app.get('/', (req, res) => {
  res.json({ message: 'Hello this is the backend!' });
});

// get all the data from the database
app.get('/form', (req, res) => {
  db.query('SELECT * FROM formulario', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// create a record
app.post('/form', (req, res) => {
  const q =
    'INSERT INTO formulario (name, gender, birthDate, education, nif, email, address, phone, terms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    req.body.name,
    req.body.gender,
    req.body.birthDate,
    req.body.education,
    req.body.nif,
    req.body.email,
    req.body.address,
    req.body.phone,
    req.body.terms,
  ];
  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json('Formulário submetido com sucesso!');
  });
});


// delete a record
app.delete('/form/:id', (req, res) => {
  const id = req.params.id;
  const q = 'DELETE FROM formulario WHERE id = ?';
  db.query(q, id, (err, data) => {
    if (err) return res.json(err);
    return res.json('Formulário eliminado com sucesso!');
  });
});

// update a record
app.put('/form/:id', (req, res) => {
  const id = req.params.id;
  const q = 'UPDATE formulario SET ? WHERE id = ?';
  db.query(q, [req.body, id], (err, data) => {
    if (err) return res.json(err);
    return res.json('Formulário atualizado com sucesso!');
  }); 
});
