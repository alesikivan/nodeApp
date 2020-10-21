const {Router} = require('express');
const router = Router();
const Time = require('../models/time');


router.get('/', async (req, res) => {

    function hoursSum(obj, prop)
    {
        var s = 0;
        obj.forEach((item, i) => {
            s += item[prop];
        });

        return s;
    }

    function getTrueTime(h, m){
        return h + +(m / 60).toFixed(0);
    }

    const ivan = await Time.find({
        developer : "Alesik Ivan"
    });

    const yara = await Time.find({
        developer : "Yaroslav Morsikov"
    });

    // const yaroslav = await Time.find();

    res.render('statistic', {
        pageTitle : "Статистика",
        isStatistic : true,
        ivan : getTrueTime(hoursSum(ivan, "hours"), hoursSum(ivan, "minutes")),
        yara : getTrueTime(hoursSum(yara, "hours"), hoursSum(yara, "minutes"))
    });
});

router.get(':_id', async (req, res) => {
    const states = await States.findById(res.body.id);

    res.render('statistic', {

    })

})

module.exports = router;
