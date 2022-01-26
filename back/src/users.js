const sql = require('sql-template-strings');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const db = require('./db');

module.exports = {
  async create(email, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const {rows} = await db.query('INSERT INTO users (id, email, password) VALUES (\''+ uuidv4() +'\', \'' + email+ '\', \'' + password +'\') RETURNING id, email;');
      const [user] = rows;
      return user;
    } catch (error) {
      if (error.constraint === 'users_email_key') {
        return null;
      }
      throw error;
    }
  },
  async find(email) {
    const {rows} = await db.query('SELECT * FROM users WHERE email=\'' + email + '\'LIMIT 1;');
    return rows[0];
  },
  async createWidget(id) {
    await db.query('INSERT INTO widget (id, pokeball, pokedex, typepokemon, spotify, weather, nameorigin) VALUES (\'' + id + '\',false, false, true , true , false, true)');
  }
};
//INSERT INTO widget (id, pokeball, pokedex, typepokemon, spotify, weather, nameorigin) VALUES ('11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',false, false, true , true , false, true);
// UPDATE widget SET pokedex=false WHERE id='11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000';