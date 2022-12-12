const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration)

const generateImage = async (req, res) => {
    try {
        const response = await openai.createImage({
            prompt: 'triangle power',
            n: 1,
            size: '512x512'
        })
    } catch (error) {

    }
    
};

module.exports = { generateImage }