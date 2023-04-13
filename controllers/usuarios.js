const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

  const params = req.query;

    res.json({
        ok: true,
        msg: 'get API controlador',
        params
    });
  };

const usuariosPut = (req, res) => {

  const {id} = req.params;


    res.json({
        ok: true,
        msg: 'put API',
        id
    });
  };

  const usuariosPost =  (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: 'post API',
        body
    });
  };

  const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API'
    });
  };

  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
  }