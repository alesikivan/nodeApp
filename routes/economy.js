const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('economy', {
        pageTitle : "Экономика",
        isEconomy : true
    })
});

module.exports = router;
