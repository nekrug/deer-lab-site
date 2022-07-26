const db = require('../models/dbmodel.js');
// db.query: (text, params, callback)

const dbController = {
  getResearch: async (req, res, next) => {
    try {
      const text = 'SELECT * FROM research WHERE deleted_on IS NULL';
      const result = await db.query(text);
      console.log(result);
      res.locals.research = result.rows;
      next();
    }
    catch(err) {
      // FIXME: this is not good error handling
      next(err);
    }
  },
};

module.exports = dbController;