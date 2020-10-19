// {Router} === express.Router
const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
    // res.status(200); => status 200 by default

    res.render('index', {
        pageTitle : "Home",
        isHome : true,
    })
});

module.exports = router;
