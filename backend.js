const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express()

app.get('/request', (req,res) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:8000/request',
        headers: {
            'api_key': 'da2a6281e8d054013075e6e69b3c082c'
        }
    }
    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
}, [])

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))