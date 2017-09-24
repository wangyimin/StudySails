/**
 * S.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: https://github.com/balderdashy/sails-docs/blob/1.0/concepts/ORM/Attributes.md
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
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      //required: true,
      unique: true
    },

    course: {
      type: 'string',
      columnName: 'course',
    },

    score: {
      type: 'number',
      columnName: 'score',
    },

    pid: {
      model: 'p'
    }

  }
};

