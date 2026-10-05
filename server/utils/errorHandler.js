export function errorHandler(err, req, res, next){    
    res.status(err.status || 500)
    .json({seccess: false, message: err.message ? err.message : "Server Error"} )
    console.log(err);
}