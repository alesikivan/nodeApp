const {Router} = require('express');
const router = Router();
const States = require('../models/state');

router.get('/', async (req, res) => {

    const states = await States.find();

    res.render('states', {
        pageTitle : "Государства",
        isStates : true,
        states
    });
});

router.get(':_id', async (req, res) => {
    const states = await States.findById(res.body.id);

    res.render('state', {

    })

})

module.exports = router;
