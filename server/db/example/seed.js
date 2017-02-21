import db from '../';

const data = [
  {},
  {},
  {}
]

const seedExample = () => db.Promise.map(data, ex => db.model('example').create(ex));

export default seedExample;
