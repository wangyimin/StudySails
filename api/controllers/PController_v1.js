/**
 * PController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 * @help        :: See https://github.com/balderdashy/sails-docs/tree/1.0/reference/waterline/models
 */

module.exports = {
    findById: (req, res) =>{
    let id = req.param('id');

    sails.getDatastore().transaction((db, proceed) =>{
      P.find({id}).populate('s').usingConnection(db)
        .exec((err, p) =>{
          if (err) { return proceed(err, []);}
          return proceed(undefined, p);
      })
    }).exec((err, r) =>{
      if (err) { return res.serverError(err);}
      if (r.length == 0){ return res.notFound(); }
      return res.json(r);
    })
  },

};

