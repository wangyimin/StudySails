/**
 * P.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 * @docs        :: https://github.com/balderdashy/waterline-docs/tree/master/models
*/
/** CREATE SQL CLAUSE
CREATE TABLE `p` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `sex` varchar(1) DEFAULT NULL,
  `birthdate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
)
*/
module.exports = {
  tableName: 'p',

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },

    name: {
      type: 'string',
      columnName: 'name',
      required: true
    },

    sex: {
      type: 'string',
      columnName: 'sex',
      enum: ['M', 'F']
    },

    birthdate: {
      type: 'date',
      columnName: 'birthdate',
    },

    s: {
      collection: 's',
      via: 'pid'
    }
  }
};

