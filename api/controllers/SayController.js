/**
 * SayController
 *
 * @description :: Server-side logic for websocket
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @help        :: See http://sailsjs.com/documentation/reference/web-sockets
 */
module.exports = {

  join: function(req, res) {
    var id = req.param('id');

    if (!req.isSocket) {
      return res.badRequest();
    }

    sails.sockets.join(req, 'room');
    sails.sockets.broadcast('room', 'join', {id:id}, req);

    return res.json({
      answer: 'welcome'
    });
  }
};

