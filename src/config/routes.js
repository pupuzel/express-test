import express from 'express';
import DBconn from './context-database.js';
import path from 'path';
const __dirname = path.resolve();

const router = express.Router();

router.get('/', (req, res) => {
    res.render(__dirname+'/src/views/index.ejs')
});

router.get('/users', (req, res) => {
    DBconn.query("SELECT * FROM T_USER WHERE DEL_YN='N' ", (error, rows) => {
        if (error) throw error;
        res.send(rows);
      });
});

export default router
