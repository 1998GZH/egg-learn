'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg! I am guozhenghong!';
    await ctx.render()
  }

  async home() {
    const { ctx } = this;
    ctx.body = 'hahaha~~';
  }
}

module.exports = HomeController;
