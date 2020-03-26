const axios = require('axios');
if(process.env.NODE_ENV != 'production') {const dotenv = require('dotenv/config')};

const axReq = async (searchText) => {

    try {
        const result = await axios.get(`${process.env.GOOGLE_SEARCH}?q=${searchText}&key=${process.env.BOOK_KEY}`);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}

const gData = {
    gSearch: (req, res) => {

            axReq(req.params.name)
            .then((qResponse) => {
                res.json(qResponse.data);
            })
    }
}

module.exports = gData;