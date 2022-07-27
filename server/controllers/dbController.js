const db = require('../models/dbmodel.js');
// db.query: (text, params, callback)

const dbController = {
  getResearch: async (req, res, next) => {
    try {
      const text = 'SELECT * FROM research WHERE deleted_on IS NULL';
      const result = await db.query(text);
      res.locals.research = result.rows;
      return next();
    }
    catch(err) {
      // FIXME: this is not good error handling
      return next(err);
    }
  },

  createResearch: async (req, res, next) => {
    try {
      console.log(req.body);
      const {
        name,
        description,
        long_description,
        image_source,
        enrollment_form_url,
        type_id,
        created_by,
      } = req.body;
      if (!name || !description || !type_id) throw new Error('Missing required field: name, description, or type_id.');
      const text = `INSERT INTO research 
        (name, description, long_description, image_source, enrollment_form_url, type_id, created_by, created_on)
        VALUES ($1, $2, $3, $4, $5, $6, $7, current_timestamp);`;
      const values = [name, description, long_description, image_source, enrollment_form_url, type_id, created_by];
      await db.query(text, values);
      // TODO: Don't return the entire research study back to the client probably.
      const result = await db.query('SELECT * FROM research ORDER BY id DESC LIMIT 1;');
      res.locals.newResearch = result.rows;
      return next();
    }
    catch(err) {
      // FIXME: this is not good error handling
      
      console.log(err);
      return next(err);
    }
  },

  updateResearch: async (req, res, next) => {
    try {
      console.log(req.body);
      if (!req.body.id) throw new Error('Missing required field: id.');
      const {
        id,
        name,
        description,
        long_description,
        image_source,
        enrollment_form_url,
        type_id,
        status,
      } = req.body;
      const values = [id, name, description, long_description, image_source, enrollment_form_url, type_id, status];
      const text = `UPDATE research 
      SET (name, description, long_description, image_source, enrollment_form_url, type_id, status) = ($2, $3, $4, $5, $6, $7, $8)
      WHERE id = $1;`;
      await db.query(text, values);
      const result = await db.query('SELECT * FROM research WHERE id = $1;', [id]);
      res.locals.updatedResearch = result.rows;
      return next();
    }
    catch(err) {
      console.log(err);
      return next(err);
    }
  },

  deleteResearch: async (req, res, next) => {
    try {
      console.log(req.body)
      const text = 'UPDATE research SET deleted_on = current_timestamp WHERE id = $1';
      await db.query(text, [req.body.id]);
      return next();
    }
    catch(err) {
      console.log(err);
      return next(err);
    }
  },

  undeleteResearch: async (req, res, next) => {
    try {
      const text = 'UPDATE research SET deleted_on = NULL WHERE id = $1';
      await db.query(text, [req.body.id]);
      return next();
    }
    catch(err) {
      console.log(err);
      return next(err);
    }
  },
};

module.exports = dbController;