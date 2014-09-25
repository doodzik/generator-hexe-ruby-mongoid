'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var sys = require('sys')
var spawn = require('child_process').spawn;

var MongoidRubyHexeGenerator = yeoman.generators.Base.extend({
  init: function () {
/*
    this.on('end', function () {
      if (!this.options['skip-install']) {
        var bundle = spawn("bundle", ["install"]);

        bundle.stdout.on('data', function (data) {
          console.log(data.toString());
        });

        bundle.stderr.on('data', function (data) {
          console.log('stderr: ' + data);
        });
      }
    });
*/
  },

  structure: function () {
    this.mkdir('adapters/mongoid');
    this.mkdir('spec/adapters/mongoid');
  },

  createFiles: function () {
    //TODO remove context
    var context = {
      service: this.service,
      Service: this.Service
    }

    //contracts
    this.template('_contracts/_mongoid.yml', 'contracts/mongoid.yml', context);

    //specs
    /*
    this.template(
      '_spec/_contracts/_mongoid_spec.rb',
      '_spec/_contracts/_mongoid_spec.rb', context);
    this.template(
      '_spec/_tasks/_mongoid_spec.rb',
      'spec/tasks/mongoid_spec.rb', context);
    */
    //tasks
    this.template('_tasks/_mongoid.rb', 'tasks/mongoid.rb', context);

  }


});

module.exports = MongoidRubyHexeGenerator;
