const saraRoute = (req,res)=> {
    res.send('Sarah Birch')
}

const diegoRoute = (req,res)=> {
    res.send('Diego GomZ');
}
module.exports = {
    saraRoute,
    diegoRoute,
};