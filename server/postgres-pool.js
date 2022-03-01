const { Pool } = require('pg');

const PG_URI = 'postgres://antprmlj:EiHLnvXIoN4DklqdtITd_cZ-ooUWgk-p@castor.db.elephantsql.com/antprmlj';

// Debugging: running the pool constructor inside the exports object might now work. We'll see.
module.exports = {
  pool: new Pool({
    connectionString: PG_URI,
  })
};