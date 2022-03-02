const { Pool } = require('pg');

const PG_URI = 'postgres://antprmlj:EiHLnvXIoN4DklqdtITd_cZ-ooUWgk-p@castor.db.elephantsql.com/antprmlj';

const pool = new Pool({ connectionString: PG_URI });

module.exports = pool;