// {Router} === express.Router
const {Router} = require('express');
const router = Router();
const Time = require('../models/time')

router.get('/', async (req, res) => {

const times = await Time.find();

    res.render('index', {
        pageTitle : "Главная",
        isHome : true,
        times :  times.reverse()
    })
});

router.post('/remove', async (req, res) => {
    try {
        await Time.deleteOne({ _id : req.body.id });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
