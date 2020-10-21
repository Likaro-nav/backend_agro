const bbddProducto = require('./Productos.js')


exports.getArticulos = (req, res) => {
    const query = req.params.query;
    console.log("entrando")
    bbddProducto.dameProductoPrecioProductor (query)
    .then((datos) => {
        console.log("enviado")
        res.json(datos)
    })
    .catch((e)=> console.log('ocurrio un error'+ e))
}