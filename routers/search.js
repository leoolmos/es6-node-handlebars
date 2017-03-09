import express from 'express';
const router = express.Router()

// SEARCH PAGE
router.get('/', (req, res, next) => {
  res.render('search');
});

export default router