/**
 * PController
 *
 * @description :: Server-side logic for managing ps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @help        :: See https://github.com/balderdashy/waterline-docs/
 */

module.exports = {

  findById: function(req, res) {
    var id = req.param('id');
    P.findOne({id: id})
       .exec(function(err, p) {
         if (err) { return res.serverError(err); }

         if (p === undefined) {
           return res.notFound();
         } else{
           return res.json(p);
         }
    });
  },

  tag: function (req, res) {
    return res.json({
      todo: 'Unsupportable api.'
    });
  },

  sql: function (req, res) {
    var id = req.param('id') || 1;

    P.query('SELECT * FROM p WHERE id = ?', [id], function(err, result) {
      if (err) { return res.serverError(err); }
      if (!result || !result.length) { return res.notFound(); }

/*** sample for looping each item and customizing response text 
      var data = [];

      result.forEach(function(item, index) {
        var o = {};

        for (var key in item) {
          o[key] = item[key];
        }

        data.push(o);

      });
***/
      sails.log(result);

      return res.json(result);
    });
  }
};

