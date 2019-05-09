const db = require("../config/mongoose");

module.exports = {
    restApi(req, callback) {
        let method = req.method;

        function showUser() {
            db.User.find().exec((err, result) => {
                if (err) throw err;
                callback(result);
            });
        }

        function addUser() {
            let user = new db.User(req.body);
            user.save();
            callback(user);
        }

        async function updateUser() {
            await db.User.updateOne({uid: req.body.uid}, req.body, (err, result) => {
                if (err) throw err;

                callback(result);
            });

        }

        function deleteUser() {
            if (req.body.uid) 
                db.User.deleteOne({uid: req.body.uid}).exec((err, result) => {
                    if (err) throw err;

                    callback(result);
                });
            else
                db.User.deleteMany().exec((err, result) => {
                    if (err) throw err;

                    callback(result);
                });
        }

        switch (method) {
            case 'GET':
                showUser();
                break;
            case 'POST':
                addUser();
                break;
            case 'PUT':
            case 'PATCH':
                updateUser();
                break;
            case 'DELETE':
                deleteUser();
                break;
            default:
                showUser();
                break;
        }
    }
}