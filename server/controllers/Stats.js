// Serves the stats page
const statsPage = (req, res) => res.render('stats', { csrfToken: req.csrfToken() });

// Exports
module.exports.statsPage = statsPage;
