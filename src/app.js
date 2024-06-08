import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()


app.use(cors({
    open:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16Kb"}))
app.use(express.static("Public"))
app.use(express.cookieParser())




( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        app.on("error", (error) => {
            console.log("Err:", error);
            throw error
        });

        app.listen( process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
        });

    }
    catch(error) {
        console.log("Error:", error);
        throw error
    }
});


export { app };