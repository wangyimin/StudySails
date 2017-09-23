/**
 * PController
 *
 * @description :: Server-side logic for managing ps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @help        :: See https://github.com/balderdashy/waterline-docs/
 */
var moment = require('moment');// libaray for date type operation

module.exports = {

  findById: (req, res) =>{     // arrow function (same as function(req, res))
    let id = req.param('id');  // block scope variable
    P.findOne({id})            // property shorthand (same as {id:id})
       .exec((err, p) =>{
         if (err) { return res.serverError(err); }

         if (p === undefined) {
           return res.notFound();
         } else{
           //return res.json(p);
           return res.view('p/findById', {moment, p, ps:[p]});
         }
    });
  },

  tag: (req, res) =>{
    return res.json({
      todo: 'Unsupportable api.'
    });
  },

  sql: (req, res) =>{
    let id = req.param('id') || 1;

    P.query('SELECT * FROM p WHERE id = ?', [id], (err, result) =>{
      if (err) { return res.serverError(err); }
      if (!result || !result.length) { return res.notFound(); }

/*** sample for looping each item and customizing response text 
      let data = [];

      result.forEach((item, index) =>{
        let o = {};

        for (let key in item) {
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

