/**
 * S.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 * @docs        :: https://github.com/balderdashy/waterline-docs/tree/master/models
*/
/** CREATE SQL CLAUSE
CREATE TABLE `s` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `course` varchar(50) NOT NULL,
  `score` int(3) NOT NULL,
  PRIMARY KEY (`id`)
)
*/
module.exports = {
  tableName: 's',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },

    course: {
      type: 'string',
      columnName: 'course',
    },

    score: {
      type: 'integer',
      columnName: 'score',
    },

    pid: {
      model: 'p'
    }
  }
};

