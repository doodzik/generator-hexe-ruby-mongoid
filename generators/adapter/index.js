'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var sys = require('sys')
var fs = require('fs')

var MongoidRubyGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.service = this.args[0].toLowerCase();
    this.Service = this.service.charAt(0).toUpperCase() + this.service.slice(1);
  },

  createFiles: function () {

    var context = {
      service: this.service,
      Service: this.Service
    }

    //adapter
    this.template(
      '_service.rb',
      'adapters/mongoid_'+context.service+'.rb',
      context
    );
    //spec
    this.template(
      '_service_spec.rb',
      'spec/adapters/mongoid_'+context.service+'_spec.rb',
      context
    );
  }


});

module.exports = MongoidRubyGenerator;
