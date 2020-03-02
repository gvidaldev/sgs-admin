const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send("Página Inicial do Site");
    res.render("servicos/servicos");
});

module.exports = router;