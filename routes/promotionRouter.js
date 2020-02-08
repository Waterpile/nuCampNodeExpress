const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all the promotions to you');
  })
  .post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
  })
  .delete((req, res) => {
    res.end('Deleting all promotions');
  });

promotionRouter.route('/:promotionId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end(`Sending promotion "${req.params.promotionId}" to you.`);
  })
  .post((req, res) => {
    res.end(`Adding promotion "${req.params.promotionId}" now.`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.write(`Updating promotion ${req.params.promotionId}\n`);
    res.end(`Updating promotion ${req.params.promotionId}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting promotion "${req.params.promotionId}"`);
  });


module.exports = promotionRouter;
