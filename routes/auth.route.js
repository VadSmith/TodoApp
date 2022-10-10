const { Router } = require('express');
const router = Router();

router.post('/registration', async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    console.error(error);
  }
})
module.exports = router;