const express = require('express');
const app = express();
const port = 4000;

const morgan = require("morgan")
app.use(morgan("combined"))

// payload limit 10mb
const bodyParser = require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(express.json());

const cors = require("cors");
app.use(cors())

app.listen(port, () => {
    console.log(`Server-Foods listening on port ${port}`)
})

app.get("/api", (req, res) => {
    res.send("APIs")
})

let database = [
    { "id": 1, "name":"Food 1", "price": 100, "image": "https://i.pinimg.com/564x/8a/7c/60/8a7c60c06a73020b7e8698687cf0ccca.jpg", "expireDate": "2023-04-15", "rating": 4 },
    { "id": 2, "name":"Food 2", "price": 200, "image": "https://i.pinimg.com/736x/ce/55/94/ce559405e2e157fb8e34c8bf7d750493.jpg", "expireDate": "2023-04-22", "rating": 5 },
    { "id": 3, "name":"Food 3", "price": 150, "image": "https://i.pinimg.com/564x/62/92/06/629206f9282ba3b6c4cd6723e9a9bfa6.jpg", "expireDate": "2023-04-29", "rating": 3 },
    { "id": 4, "name":"Food 4", "price": 80, "image": "https://i.pinimg.com/564x/1e/35/08/1e35089613ec7ebcda285b9ea4127770.jpg", "expireDate": "2023-05-06", "rating": 2 },
    { "id": 5, "name":"Food 5", "price": 500, "image": "https://i.pinimg.com/originals/15/9e/ec/159eecb56d3155c9963d7edf7fc8a5c5.gif", "expireDate": "2023-05-13", "rating": 1 },
    { "id": 6, "name":"Food 6", "price": 250, "image": "https://i.pinimg.com/736x/4a/98/b1/4a98b1b5bf70b79dba871c1b193bfdda.jpg", "expireDate": "2023-05-20", "rating": 4 },
    { "id": 7, "name":"Food 7", "price": 300, "image": "https://i.pinimg.com/564x/ca/1b/25/ca1b251acb74e7af09b520e3c6dbbd41.jpg", "expireDate": "2023-05-27", "rating": 5 },
    { "id": 8, "name":"Food 8", "price": 400, "image": "https://i.pinimg.com/564x/19/0e/90/190e906acd9796b645a924e57b209da8.jpg", "expireDate": "2023-06-03", "rating": 3 },
    { "id": 9, "name":"Food 9", "price": 350, "image": "https://i.pinimg.com/564x/90/dd/13/90dd13fd7188b9d32854f6a4e7e97aad.jpg", "expireDate": "2023-06-10", "rating": 2 },
    { "id": 10, "name":"Food 10", "price": 450, "image": "https://i.pinimg.com/564x/87/ca/9f/87ca9f75a79ee3362cacd6f4e028094f.jpg", "expireDate": "2022-06-17", "rating": 1 },
    { "id": 11, "name":"Food 11", "price": 550, "image": "https://i.pinimg.com/564x/d4/3a/fe/d43afe7367a2213028e1dbfff6871119.jpg", "expireDate": "2023-06-24", "rating": 4 },
    { "id": 12, "name":"Food 12", "price": 60, "image": "https://i.pinimg.com/564x/b7/c8/29/b7c8298e628eb61d9f6c42897231e4d1.jpg", "expireDate": "2023-07-01", "rating": 5 },
    { "id": 13, "name":"Food 13", "price": 70, "image": "https://i.pinimg.com/564x/99/54/bb/9954bb0418e5540446348220dd934626.jpg", "expireDate": "2023-07-08", "rating": 3 },
    { "id": 14, "name":"Food 14", "price": 80, "image": "https://i.pinimg.com/564x/f7/8e/bb/f78ebb07fa9da3e3d249c8821f00301f.jpg", "expireDate": "2023-07-15", "rating": 2 },
    { "id": 15, "name":"Food 15", "price": 90, "image": "https://i.pinimg.com/564x/4d/f2/67/4df267d4ccd84788ae6d58ba39082497.jpg", "expireDate": "2023-07-22", "rating": 1 },
]

// get all foods
app.get("/api/foods", (req, res) => {
    res.send(database)
})

// get well foods: rating >= 4 and expireDate >= today
app.get("/api/foods/well", (req, res) => {
    let today = new Date()
    let wellFoods = database.filter(food => food.rating >= 4 && new Date(food.expireDate) >= today)
    res.send(wellFoods)
})
