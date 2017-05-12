import express from 'express';
import api from '../api/api';
const router = express.Router()

router.get('/:postcode', (req, res, next) => {

  const postcode = req.params.postcode;

  api.getProperties(postcode.trim().toUpperCase(), (results) => {
    res.render('results', results);
  });

});

export default router