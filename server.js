const express = require("express");
const app = express();
const connectToDatabase = require("./config/connectToDatabase");
const cors = require("cors");

connectToDatabase();

app.use(cors());//sprecava cors policy upozorenja

app.use(express.json({ extended: false }));//koristimo json za kreiranje postova

// osnovne rute
app.use("/api/posts", require("./routes/posts.js"));
app.use("/api/users", require("./routes/users.js"));

//broj porta na kom pokrecemo nas server, bice 5000 ako nam heroku ne da po defaultu
let PORT = process.env.PORT || 5000;

//metoda preko koje povezujemo nas server sa gore definisanim brojem porta
app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
