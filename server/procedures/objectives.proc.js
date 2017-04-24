var db = require("../config/db");

exports.all = function() {
    return db.rows("GetAllObjectives()", []);
};

exports.read = function(id) {
    return db.row('GetSingleObjective(?)', [id]);
};