/*  
Controller definition
*/
const createOne = (connection, req, res) => {
    // Create data in the DB
    connection.query(`INSERT INTO ${req.params.endpoint} SET ?`, req.body, ( err, data ) => {
        // Check query
        if( err ){
            // Send error message
            return res.json( {
                url: req.originalUrl,
                method: 'POST',
                msg: 'Data not created',
                data: null,
                err: err
            });
        }
        else{
            // Send success message
            return res.json( {
                url: req.originalUrl,
                method: 'POST',
                msg: 'Data created',
                data: data,
                err: null
            });
        }
    })
}

const readAll = (connection, req, res) => {
    // Create data in the DB
    connection.query(`SELECT * FROM ${req.params.endpoint}`, ( err, data ) => {
        // Check query
        if( err ){
            // Send error message
            return res.json( {
                url: req.originalUrl,
                method: 'GET',
                msg: 'Data not sended',
                data: null,
                err: err
            });
        }
        else{
            // Send success message
            return res.json( {
                url: req.originalUrl,
                method: 'GET',
                msg: 'Data sended',
                data: data,
                err: null
            });
        }
    })
}

const readOne = (connection, req, res) => {
    // Create data in the DB
    connection.query(`SELECT * FROM ${req.params.endpoint} WHERE id=${req.params.id}`, ( err, data ) => {
        // Check query
        if( err ){
            // Send error message
            return res.json( {
                url: req.originalUrl,
                method: 'GET',
                msg: 'Data not sended',
                data: null,
                err: err
            });
        }
        else{
            // Send success message
            return res.json( {
                url: req.originalUrl,
                method: 'GET',
                msg: 'Data sended',
                data: data[0],
                err: null
            });
        }
    })
}

const updateOne = (connection, req, res) => {
    // Create data in the DB
    connection.query(`
    UPDATE ${req.params.endpoint} 
    SET title="${req.body.title}", content="${req.body.content}"
    WHERE id=${req.params.id}`
    , ( err, data ) => {
        // Check query
        if( err ){
            // Send error message
            return res.json( {
                url: req.originalUrl,
                method: 'PUT',
                msg: 'Data not updated',
                data: null,
                err: err
            });
        }
        else{
            // Send success message
            return res.json( {
                url: req.originalUrl,
                method: 'PUT',
                msg: 'Data updated',
                data: data,
                err: null
            });
        }
    })
}

const deleteOne = (connection, req, res) => {
    // Create data in the DB
    connection.query(`DELETE FROM page WHERE id=${req.params.id}`
    , ( err, data ) => {
        // Check query
        if( err ){
            // Send error message
            return res.json( {
                url: req.originalUrl,
                method: 'DELETE',
                msg: 'Data not deleted',
                data: null,
                err: err
            });
        }
        else{
            // Send success message
            return res.json( {
                url: req.originalUrl,
                method: 'DELETE',
                msg: 'Data deleted',
                data: data,
                err: null
            });
        }
    })
}
//

/* 
Export
*/
module.exports = {
    createOne,
    readAll,
    readOne,
    updateOne,
    deleteOne
}
//