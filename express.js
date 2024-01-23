#!/usr/bin/env node
const express = require("express");
const fs = require('fs');

const app = express();

const har = require("./index");

const pathLib = require('path')
const harPaths = fs.readdirSync('./hars').filter(file => file.endsWith('.har')).map(file => pathLib.join('./hars', file));

app.use(har.getMiddleware(harPaths));
app.use((req, res) => {
    res.status(404).send();
});
app.listen(9000);