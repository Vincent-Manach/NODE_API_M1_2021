/*
Imports
*/
    // Node
    const express = require('express');

    // Inner
    const { createOne, readAll, readOne, updateOne, deleteOne } = require('../controllers/crud.controller');
//

/*  
Routes definition
*/
    class RouterClass {
        constructor( { connection } ){
           this.router = express.Router();
           this.connection = connection;
        }

        routes(){
            // Main API route definition
            this.router.get('/', ( req, res ) => {
                // TODO: add the API definition
                return res.json( {
                    url: req.originalUrl,
                    method: 'GET',
                    msg: 'API Home page',
                    data: null,
                    err: null
                });
            });

            // CRUD: route to Create data
            this.router.post('/:endpoint', ( req, res ) => createOne(this.connection, req, res) );

            // CRUD: route to Read all data
            this.router.get('/:endpoint', ( req, res ) => readAll(this.connection, req, res) );

            // CRUD: route to Read one data
            this.router.get('/:endpoint/:id', ( req, res ) => readOne(this.connection, req, res) );

            // CRUD: route to Update one data
            this.router.put('/:endpoint/:id', ( req, res ) => updateOne(this.connection, req, res));

            // CRUD: route to Delete one data
            this.router.delete('/:endpoint/:id', ( req, res ) => deleteOne(this.connection, req, res));
        }

        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return this.router;
        };
    }
//

/*
Export
*/
    module.exports = RouterClass;
//