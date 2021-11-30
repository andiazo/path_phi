const route = ({ router, makeExpressCallback, validateAuth}) => {
    router.get("/", validateAuth, makeExpressCallback(""));
}

module.exports = route;