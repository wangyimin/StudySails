/**
 * PController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 * @help        :: See https://github.com/balderdashy/sails-docs/tree/1.0/reference/waterline/models
 */

module.exports = {
  find: (req, res) =>{
    let id = req.param('id');

    sails.getDatastore().transaction((db, proceed) =>{
      P.find({id}).populate('ss').usingConnection(db)
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

  create: (req, res) =>{
    sails.getDatastore().transaction((db, proceed) =>{
    P.create({name:'WANG01', sex: 'M', birthdate:'2001-12-31T15:00:00.000Z'})
      .meta({fetch: true})
      .usingConnection(db)
      .exec(function(err,p){
        if (err) { return proceed(err); }

        S.create({course:'ENG', score:60, pid: p.id})
          .meta({fetch: true})
          .usingConnection(db)
          .exec(function(err,s){
            if (err) { return proceed(err); }
            return proceed(); 
        });
      });
    }).exec((err) =>{
      if (err) { return res.serverError(err);}
      return res.ok();
    })
  },
};

