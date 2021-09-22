"use strict";
const multer = require('multer');

const Account = require("../models/Account");

const output = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
};

const process = {
  login: async (req, res) => {
    const account = new Account(req.body);
    const response = await account.login();

    return res.json(response);
  },

  register: async (req, res) => {
    req.body.profile_image_path = req.file.path;

    const account = new Account(req.body);
    const response = await account.register();

    return res.json(response);
  },

}

module.exports = {
  output,
  process,
};
