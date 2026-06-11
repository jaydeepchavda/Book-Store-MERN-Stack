import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    status: 'ok',
    service: 'bookstore-backend',
  });
});

export default router;