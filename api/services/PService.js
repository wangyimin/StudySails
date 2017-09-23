/**
 * PService
 *
 * @description :: Server-side logic
 * @help        :: See https://scotch.io/tutorials/build-a-todo-app-using-sailsjs-and-angularjs
 * @help        :: See https://github.com/balderdashy/waterline-docs/
 * @help        :: See http://es6-features.org/
 */
module.exports = {
  findById: (id, done) =>{
    P.findOne({id})
       .exec((err, p) =>{
         if(err) done(err, null);
         done(null, p);
    });
  },
}