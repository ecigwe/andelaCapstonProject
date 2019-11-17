/* eslint-disable no-undef */
const debug = require('debug');
const { pool } = require('../config');

// create user tables if not exist

exports.createEmployeeTable = () => {
	const employee = `CREATE TABLE IF NOT EXISTS
  
         employee( 
  
            id SERIAL PRIMARY KEY, 
  
            firstName VARCHAR NOT NULL,
  
            lastName VARCHAR NOT NULL,
  
            email VARCHAR NOT NULL,
  
            password VARCHAR NOT NULL,
  
            gender VARCHAR NOT NULL,
  
            jobRole VARCHAR NOT NULL,
  
            isAdmin BOOLEAN DEFAULT FALSE,
  
            department VARCHAR NOT NULL,
  
            regDate TIMESTAMP DEFAULT NOW()
  
          )`;

	pool.query(employee)

		.then(res => {
			debug('app:*')(`table employee is available ${res}`);
		})

		.catch(err => {
			debug('app:*')(err);
		});
};

exports.createGifTable = () => {
	const gif = `CREATE TABLE IF NOT EXISTS
  
        gif(
  
          id SERIAL PRIMARY KEY,
  
          employee_id INT NOT NULL,
  
          imageUrl VARCHAR NOT NULL,
  
          title VARCHAR NOT NULL,
  
          gifDate TIMESTAMP DEFAULT NOW()
  
        )`;

	pool.query(gif)

		.then(res => {
			debug('app:*')(`table gif is available ${res}`);
		})

		.catch(err => {
			debug('app:*')(err);
		});
};

exports.createArticlesTable = () => {
	const articles = `CREATE TABLE IF NOT EXISTS
  
        articles(
  
          id SERIAL PRIMARY KEY,
  
          employee_id INT NOT NULL,
  
          title VARCHAR NOT NULL,
  
          article VARCHAR NOT NULL,
  
          articleDate TIMESTAMP DEFAULT NOW()
  
        )`;

	pool.query(articles)

		.then(res => {
			debug('app:*')(`table articles is available ${res}`);
		})

		.catch(err => {
			debug('app:*')(err);
		});
};

exports.createGifCommentTable = () => {
	const comment = `CREATE TABLE IF NOT EXISTS
  
        gif_comment(
  
          id SERIAL PRIMARY KEY,
  
          gif_id INT NOT NULL,
  
          employee_id INT NOT NULL,
  
          comment VARCHAR NOT NULL,
  
          comment_date TIMESTAMP DEFAULT NOW()
  
        )`;

	pool.query(comment)

		.then(res => {
			debug('app:*')(`table gif_comment is available ${res}`);
		})

		.catch(err => {
			debug('app:*')(err);
		});
};

exports.disconnect = () => {
	// disconnect client

	pool.on('remove', () => {
		debug('app:database')('Tables created successfully, conection removed');
	});
};

exports.createArticleCommentTable = () => {
	const comment = `CREATE TABLE IF NOT EXISTS
  
        article_comment(
  
          id SERIAL PRIMARY KEY,
  
          article_id INT NOT NULL,
  
          employee_id INT NOT NULL,
  
          comment VARCHAR NOT NULL,
  
          comment_date TIMESTAMP DEFAULT NOW()
  
        )`;

	pool.query(comment)

		.then(res => {
			debug('app:*')(`table article_comment is available ${res}`);
		})

		.catch(err => {
			debug('app:*')(err);
		});
};

// eslint-disable-next-line no-dupe-keys
exports.disconnect = () => {
	// disconnect client

	pool.on('remove', () => {
		debug('app:database')('Tables created successfully, conection removed');
	});
};
