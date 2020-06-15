const checkMillionDollarIdea = (req, res , next) => {
    const {
        numWeeks,
        weeklyRevenue
    } = res.body;
    const totalMoney = Number(numWeeks) * Number(weeklyRevenue);

// Makes sure that any new or updated ideas are still worth at least one million dollars
    if (!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
        res.status(400).send();
    } else {
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;