const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "dKeY3FhF7QVEMh1PIJ2XHJGq9",
    appSecret: "AqYSsFW488maqQ9SWpgrMKbEZEqJ6vhEUN8JFbC3CyqKpOQskj",
    accessToken: "1553780055792295936-9dGrsMiySyaQTsJnT5gEM5V4cc8Xb7",
    accessSecret: "NGZ9FihmeMclobWvNvHapm9w5hwn09CZcuCkE76NVBFeS"
})

const rwClient = client.readWrite

module.exports = rwClient