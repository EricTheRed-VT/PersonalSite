import db from './';

import seedExample from './example/seed.js';

db.didSync
  .then(() => db.sync({
    force: true
  }))
  .then(seedExample)
  .then(examples => console.log(`Seeded ${examples.length} examples OK`))
  .catch(console.error)
  .finally(() => db.close());
