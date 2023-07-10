const axios = require('axios');

const fetchAPIData = (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '',
        headers: {}
    };

    axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));

        res.status(200)
        res.json(response.data)
    })
    .catch((erro) => {
        console.log(error);
    });

}

//export the function for the router to access
module.exports = {
    fetchAPIData
}