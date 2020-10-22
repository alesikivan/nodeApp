const {Router} = require('express');
const router = Router();
const Time = require('../models/time');


router.get('/', async (req, res) => {

    // time
    const month = 170;
    const week = (month/4).toFixed(0);

    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstDayOfWeek = new Date(curr.setDate(first)).toUTCString();
    var lastDayOfWeek = new Date(curr.setDate(last)).toUTCString();


    var date = new Date();
    var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);


    function hoursSum(obj, prop)
    {
        var s = 0;
        obj.forEach((item, i) => {
            s += item[prop];
        });

        return s;
    }

    function getTrueTime(h, m){
        return h + +Math.floor(m / 60);
    }

    const ivan = await Time.find({
        date_create : { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
        developer : "Alesik Ivan"
    });

    const yara = await Time.find({
        date_create : { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
        developer : "Yaroslav Morsikov"
    });

    const ivanWeek = await Time.find({
        date_create : { $gte: firstDayOfWeek, $lte: lastDayOfWeek },
        developer : "Alesik Ivan"
    });

    const yaraWeek = await Time.find({
        date_create : { $gte: firstDayOfWeek, $lte: lastDayOfWeek },
        developer : "Yaroslav Morsikov"
    });

    const weeklyRate = false;
    const monthlyRate = false;

    const notEnough = (count, total) => (total > count) ? "notEnough" : "enough";

    const enough = (count, total) => ( Math.sign(count - total) === -1 ) ? `${count - total}` : `+${count - total}`;

    res.render('statistic', {
        pageTitle : "Статистика",
        isStatistic : true,
        ivan : getTrueTime(hoursSum(ivan, "hours"), hoursSum(ivan, "minutes")),
        yara : getTrueTime(hoursSum(yara, "hours"), hoursSum(yara, "minutes")),
        ivanW : getTrueTime(hoursSum(ivanWeek, "hours"), hoursSum(ivanWeek, "minutes")),
        yaraW : getTrueTime(hoursSum(yaraWeek, "hours"), hoursSum(yaraWeek, "minutes")),
        month, week,
        isEnoughForIvan : notEnough( getTrueTime(hoursSum(ivanWeek, "hours"), hoursSum(ivanWeek, "minutes")), week  ),
        enoughForIvan : enough( getTrueTime(hoursSum(ivanWeek, "hours"), hoursSum(ivanWeek, "minutes")), week  ),
        isEnoughForYara : notEnough( getTrueTime(hoursSum(yaraWeek, "hours"), hoursSum(yaraWeek, "minutes")), week  ),
        enoughForYara : enough( getTrueTime(hoursSum(yaraWeek, "hours"), hoursSum(yaraWeek, "minutes")), week  )
    });
});

router.get(':_id', async (req, res) => {
    const states = await States.findById(res.body.id);

    res.render('statistic', {

    })

})

module.exports = router;
