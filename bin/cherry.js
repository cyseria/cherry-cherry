/**
 * @file 命令行入口文件
 * @author Cyseria <xcyseria@gmail.com>
 * @created time: 2018-06-07 22:37:25
 * @last modified by: Cyseria
 * @last modified time: 2018-06-10 21:08:05
 */

const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');

const pkg = require('../package.json');

// 版本信息
program.version(pkg.version);

// 项目初始化
program
    .command('init [conf...]')
    .description('init project with scaffold')
    .action(function (conf) {
        const inputName = conf[0];
        const inputScaffold = conf[1];
        require('./cherry-init')(inputName, inputScaffold);
    });

// 获取全部列表
program
    .command('list')
    .description('find all scaffolds in market')
    .action(function () {
        require('./cherry-list')();
    });

// 发布脚手架
program
    .command('publish [url]')
    .description('publish your scffold 😄 ')
    .action(function (url) {
        require('./cherry-publish')(url);
    });
program.parse(process.argv);


