const sql = require('sql-template-strings');
const db = require('./../db');

module.exports = {
//   async create(email, password) {
//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const {rows} = await db.query('INSERT INTO users (id, email, password) VALUES (\''+ uuidv4() +'\', \'' + email+ '\', \'' + password +'\') RETURNING id, email;');
//       const [user] = rows;
//       return user;
//     } catch (error) {
//       if (error.constraint === 'users_email_key') {
//         return null;
//       }
//       throw error;
//     }
//   },
  async Add_Widget(widget, id) {
    try {
      const {rows} = await db.query('UPDATE widget SET ' + widget + '=true WHERE id=\''+ id + '\' RETURNING id;');
      const [user] = rows;
      return user;
    } catch (error) {
      throw error;
    }
  },
  async Supp_Widget(widget, id) {
    const {rows} = await db.query('UPDATE widget SET ' + widget + '=false WHERE id=\''+ id + '\';');
    return rows[0];
  },
  async Get_Widget(id, response) {
    // const {rows} = await db.query('SELECT * FROM widget WHERE id=\'' + id + '\'LIMIT 1;');
    db.query('SELECT * FROM widget LIMIT 1;', (err, res) => {
      if (err) {
        return(err.stack)
      } else {
        return(res.rows[0])
      }});
    // return rows;
  },
};