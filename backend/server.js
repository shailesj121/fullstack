import 'dotenv/config'
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready')
})
 
const Port = process.env.PORT || 3000;

app.listen(Port, () => {
    console.log(`your server listening at:- localhost:${Port}/ `)
})