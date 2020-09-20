require('dotenv').config()
const fs = require('fs').promises
const axios = require('axios')

const baseURL = 'https://api.sketchfab.com/v3'
    //https://api.sketchfab.com/v3/me/search?type=models

const getModelData = async() => {
    try {
        const requests = []
        const request1 = axios.get(`${baseURL}/me/search?type=models&count=24`, {
            headers: {
                Authorization: process.env.SKETCHFAB_API_TOKEN
            }
        })
        const request2 = axios.get(`${baseURL}/me/search?type=models&count=24&cursor=24`, {
            headers: {
                Authorization: process.env.SKETCHFAB_API_TOKEN
            }
        })
        const request3 = axios.get(`${baseURL}/me/search?type=models&count=24&cursor=48`, {
            headers: {
                Authorization: process.env.SKETCHFAB_API_TOKEN
            }
        })
        const request4 = axios.get(`${baseURL}/me/search?type=models&count=24&cursor=72`, {
            headers: {
                Authorization: process.env.SKETCHFAB_API_TOKEN
            }
        })
        requests.push(request1)
        requests.push(request2)
        requests.push(request3)
        requests.push(request4)
        const results = await Promise.all(requests)

        const data = results.flatMap(item => item.data.results)

        const stands = {}
        data.forEach(({
            uid,
            name
        }) => {
            stands[uid] = {
                name,
                objects: []
            }
        })
        await fs.writeFile('./src/data/stand_data_raw.json', JSON.stringify(stands, null, 1))
    } catch (e) {
        throw e
    }
}

getModelData()