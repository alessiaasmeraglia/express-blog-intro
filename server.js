import express from "express";

const app = express();

const port = 3000;

const posts = [
    {
        title: "Il mio primo post",
        content: "Questo è il primo articolo del mio blog personale.",
        image: "/imgs/primo-post.jpg",
        tags: ["blog", "personale", "intro"]
    },
    {
        title: "Perché sto studiando Node.js",
        content: "Node.js mi permette di usare JavaScript anche lato server.",
        image: "/imgs/node-js.jpg",
        tags: ["node", "javascript", "backend"]
    },
    {
        title: "Prime prove con Express",
        content: "Express semplifica la creazione di rotte e risposte HTTP.",
        image: "/imgs/express.jpg",
        tags: ["express", "server", "api"]
    },
    {
        title: "Organizzare un progetto backend",
        content: "Separare file, dati e cartelle statiche aiuta a mantenere il codice più ordinato.",
        image: "/imgs/backend.jpg",
        tags: ["backend", "organizzazione", "progetto"]
    },
    {
        title: "Il mio percorso da developer",
        content: "Ogni esercizio aggiunge un pezzo in più alla mia comprensione dello sviluppo web.",
        image: "/imgs/developer.jpg",
        tags: ["developer", "studio", "boolean"]
    }
];

app.get("/", (req, res) => {
    res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
    res.json({
        posts: posts
    });
});

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});