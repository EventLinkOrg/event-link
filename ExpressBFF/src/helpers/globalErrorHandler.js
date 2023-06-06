const errorHandler = (err, req, res, next) => {
    res.status(err.response.status).send(err.response.data);
    next();
}

export default errorHandler;