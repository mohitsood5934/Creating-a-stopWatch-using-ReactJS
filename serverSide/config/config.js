var config = {
    API_PATH: '/api',
    PORT: process.env.PORT || 4000,
    DB: {
        HOST: 'localhost',
        PORT: '27017',
        DATABASE: 'stopWatchDB'
    },
    getDBString: function () {
        return "mongodb://" + this.DB.HOST + ":" + this.DB.PORT + "/" + this.DB.DATABASE;
    }
}
module.exports = config;