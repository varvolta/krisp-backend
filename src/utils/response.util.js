import httpCodes from '../constants/httpCodes.js'

export const successResponse = (res, result = null, code = httpCodes.OK, message = 'Success') => {
    return res.status(code).json({
        message,
        code,
        result
    })
}

export const failureResponse = (res, code = httpCodes.BAD_REQUEST, message = 'Failure') => {
    return res.status(code).json({
        message,
        code,
        error
    })
}