import express from 'express'
import { Router } from 'express';
import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
    server  : "dta-eun-ndev-sqlserver-cnhfse-01.database.windows.net",
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "dta_eun_ndev_sdb_cnhfse_01",
    port: 1433,
    options: { 
        encrypt: true, 
     }
}

const app = express();
const productRouter = new Router();
const userRouter = new Router();
const rankingRouter = new Router();

app.use(express.json())
app.use('/products', productRouter);
app.use('/user', userRouter);
app.use('/ranking', rankingRouter);

productRouter.get('/', function (req, res) {
        const productQuery = "select * from hack.PRODUCT";
        const request = new sql.Request();
   request.query(productQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.send(result.recordset);
   });
})

userRouter.get('/', function(req, res) {
    const userQuery = "select * from hack.PLAYER";
        const request = new sql.Request();
   request.query(userQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.send(result.recordset);
   });
})

userRouter.post('/', function(req, res) {
    const userQuery = `insert into hack.PLAYER (player_id, email, location, bu, gender, age, size) values ('${req.body.player.player_id}', '${req.body.player.email}', '${req.body.player.location}', '${req.body.player.bu}', '${req.body.player.gender}', '${req.body.player.age}', '${req.body.player.size}')`
    const request = new sql.Request();
    request.query(userQuery, (err, result) => {
        if (err) res.status(500).send(err);
        res.status(200).send();
})})

userRouter.get('/email=:email', function (req, res) {
    const userQuery = `select * from hack.PLAYER where email='${req.params.email}'`;
        const request = new sql.Request();
   request.query(userQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.send(result.recordset);
   });
})

userRouter.get('/id=:id', function (req, res) {
    const userQuery = `select * from hack.PLAYER where player_id='${req.params.id}'`;
        const request = new sql.Request();
   request.query(userQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.send(result.recordset);
   });
})

rankingRouter.post('/', function(req, res) {
    const rankingQuery = `insert into hack.ranking (ranking_id, player_id, product_id, attribute_id, ranking_method, ranking_value) values ('${req.body.ranking.ranking_id}','${req.body.ranking.player_id}', '${req.body.ranking.product_id}', '${req.body.ranking.attribute_id}', '${req.body.ranking.ranking_method}', '${req.body.ranking.ranking_value}')`
    const request = new sql.Request();
    request.query(rankingQuery, (err, result) => {
        if (err) res.status(500).send(err);
        res.status(200).send();
})
})


const port = 5000;

sql.connect(config, err => {
    if (err) {
       console.log('Failed to open a SQL Database connection.', err.stack);
       process.exit(1);
    }
    app.listen(port, () => {
       console.log(`App is listening at http://localhost:${port}`);
    });
 })