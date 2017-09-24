/**
 * P.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: https://github.com/balderdashy/sails-docs/blob/1.0/concepts/ORM/Attributes.md
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
  primaryKey: 'id',

  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      //required: true,
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
      isIn: ['M', 'F']
    },

    birthdate: {
      type: 'ref',
      columnType: 'date',
      columnName: 'birthdate',
    },

    ss: {
      collection: 's',
      via: 'pid'
    }
  }
};

