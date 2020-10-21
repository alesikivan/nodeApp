const {body} = require('express-validator');

const validatorsArr = [
    check('minutes').custom( (value, req) => {
        if(typeof +value === "number")
            if(+value > 60 || +value < 0)
                throw new Error("In hour is only 60 minutes :)")
            else
                return true;
        else
            throw new Error("Please enter hours :)")
    } )
];

module.exports.validatorsArr = validatorsArr;
