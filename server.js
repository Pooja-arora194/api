import express from 'express';
import mongoose from 'mongoose';
import errorHandler from './middlewares/errorHandler';
import path from 'path';
const app = express();
import routes from './routes';



//global.appRoot = path.resolve(__dirname);
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);
//app.listen(4000, () => console.log('Listening on port 4000'));

mongoose.connect('Your_url',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(4000, () => console.log('listen on port 4000.'))).catch((error) => console.log("error occured", error))