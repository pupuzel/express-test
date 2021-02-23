export default function(req, res, next){
    console.log(`server request url : ${req.originalUrl}`)

    next()
}