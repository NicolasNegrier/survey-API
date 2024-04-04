import express from 'express';
import dayRouter from './routes/day.router';
import bodyParser from 'body-parser';
import workerRouter from './routes/worker.router';
import planningRouter from './routes/planning.router';
import slotRouter from './routes/slot.router';
import serviceRouter from './routes/service.router';

const app = express()
const port = process.env.PORT || 3000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, DELETE, OPTIONS');
    next();
})

app.use(express.json()) // Permet de récupérer les informations envoyées en json
app.use(bodyParser.urlencoded({extended: true})); // Permet de récupérer les informations envoyées d'un formulaire

app.use('/days', dayRouter);
app.use('/workers', workerRouter);
app.use('/plannings', planningRouter);
app.use('/slots', slotRouter);
app.use('/services', serviceRouter);

app.get("/ping", (req, res) => {
    res.json({ message: "pong"}).status(200);
});

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});