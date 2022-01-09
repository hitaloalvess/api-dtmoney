const cors = (request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "https://hitaloalvess-dtmoney.herokuapp.com/");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "x-app-id");
    response.setHeader("Access-Control-Max-Age", "10");
    next();
};

export { cors };