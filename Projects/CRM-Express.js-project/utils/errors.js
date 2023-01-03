class ValidationError extends Error {
}

class NotFoundError extends Error {
}

function handleError(error, req, res, next) {
    if (error instanceof NotFoundError) {
        res
            .status(404)
            .render('error', {
                message: 'There is no client with this ID',
            });
        return
    }

    console.error(error)

    res.status(error instanceof ValidationError ? 400 : 500)
    // console.log(error instanceof ValidationError)
    res.render('error', {
        message: error instanceof ValidationError ? error.message : 'Sorry, try again later',
    });
}


module.exports = {
    handleError,
    ValidationError,
    NotFoundError
}
