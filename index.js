import express from "express"
import axios from "axios"
import path from "path"

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('./public'));

// Set EJS as view engine
app.set("view engine", "ejs");
app.set('views, __dirname + ./views');

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://sfl.world/api/v1/prices");
        const finalRes = result.data.data.p2p;
        const updateTime = result.data.updated_text;
        const date = new Date();
        console.log(result.data.updated_text)
        res.render('index', { 
            data: finalRes, 
            numResourses: numResourses, 
            updateTime: updateTime ,
            date: date,
        }); 
    } catch (error) {
        const message = "Failed to make request";
        console.error(message);
        res.render('index', { error: message });
    }
});

app.listen(port, () => {
    console.log(`Server listening to ${port}.`)
})

let numResourses = [
    1500,
    600,
    700,
    750,
    500,
    "NO DATA",
    400,
    250,
    140,
    120,
    100,
    70,
    60,
    40,
    60,
    50,
    40,
    40,
    60,
    25,
    6,
    2,
    40,
    5,
    1
]