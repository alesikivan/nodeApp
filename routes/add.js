const {Router} = require('express');
const Time = require('../models/time')
const router = Router();
const {check, validationResult} = require('express-validator');
// const validators = require('express-validator');        // TURN ON LATER


router.get('/', (req, res) => {
    res.render('add', {
        pageTitle : "Добавить",
        isAdd : true,
        hours : [1, 2, 3, 4, 5, 6, 7, 8],
        minutes : [15, 20, 30, 45],
        developers : ["Alesik Ivan", "Yaroslav Morsikov"]
    })
});

router.post(
    '/',
    // ...validators.validatorsArr,
    check('minutes').custom( (value, req) => {
        if(typeof +value === "number")
            if(+value > 60 || +value < 0)
                throw new Error("В одном часе 60 минут.")
            else
                return true;
        else
            throw new Error("Пожалуйста введите минуты.")
    } ),
    check('hours').custom( (value, req) => {
        if(typeof +value === "number")
            if(+value > 24 || +value < 0)
                throw new Error("В сутках 24 часа.")
            else
                return true;
        else
            throw new Error("Пожалуйста введите часы.")
    } ),
    check('developer', "Пожалуйста выберите автора!").isLength({min:5, max: 25}),
    async (req, res) => {

    // console dislaying
    // console.log(req.body);

    const errors = validationResult(req);

    // if we have some errors
    if(!errors.isEmpty())
    {
        console.log(errors.array());
        res.render( 'add', {
            errors: errors.array(),
            hours : [1, 2, 3, 4, 5, 6, 7, 8],
            minutes : [15, 20, 30, 45],
            developers : ["Alesik Ivan", "Yaroslav Morsikov"]
        } );
    }else{

        // data in model writing
        const time = new Time({
            hours : req.body.hours,
            minutes : req.body.minutes,
            developer : req.body.developer,
            date_create : new Date(),
            userId : req.user._id
        });

        try {
            await time.save();
            res.redirect('/');
        } catch (e) {
            console.log(e);
        }

        res.redirect('/add');
    }

});

module.exports = router;
