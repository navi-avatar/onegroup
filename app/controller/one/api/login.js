'use strict';
const db_user = require('../../../mock/db_user');
const db_secret = require('../../../mock/db_secret');
const jsonwebtoken = require('jsonwebtoken')
 


const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    
    if (!ctx.request.body.name && !ctx.request.body.password) ctx.throw('login argument error', 404);

    const name = ctx.request.body.name;
    const password = ctx.request.body.password;

    const user = db_user[name];

    const uid = user.uid;

    if (!user) return ctx.throw('cannot find that user', 404);

    if (password != user.password) return ctx.throw('cannot find that pwd', 404);

    // make a new token
    let payload = { uid, name };
    const token = jsonwebtoken.sign(payload, db_secret.jwtSecret, { expiresIn: 60 })
    ctx.body = { user: user, token: token }
  }
  
}

module.exports = HomeController;
