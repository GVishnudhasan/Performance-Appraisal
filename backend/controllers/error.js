exports.get404 = (req, res, next) =>  {
    const error = new Error('Not Found.');
    error.statusCode = 404;
    extends(error);
}

exports.get500 = (error, req, res, next) => {
    const error = new Error('Not Found.');
    error.statusCode = 404;
    extends(error);
}