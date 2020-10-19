const {Router} = require('express');
const States = require('../models/state')
const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        pageTitle : "Добавить",
        isAdd : true
    })
});

router.post('/', async (req, res) => {
    // console dislaying
    console.log(req.body);

    // data in model writing
    const state = new States({
        state : req.body.state,
        description : req.body.description
    });

    try {
        await state.save();
        res.redirect('/states');
    } catch (e) {
        console.log(e);
    }

});

module.exports = router;
