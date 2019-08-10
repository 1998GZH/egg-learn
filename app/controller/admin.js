'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async hello() {
    this.ctx.body = "hello hello ~~";
  }
}

module.exports = AdminController;
