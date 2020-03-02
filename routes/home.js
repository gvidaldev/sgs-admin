const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Página Inicial do Site");
});

module.exports = router;