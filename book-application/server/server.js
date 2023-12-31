import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from 'react-redux';
import { StaticRouter } from "react-router-dom/server";
import path from 'path';
import fs from 'fs';
import App from "../src/App";
import store from '../src/store';

const app = express();

app.use(express.static('./build', { index: false }));

app.get("/*", (req, res) => {
  const reactApp = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    )
  })


});

app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});