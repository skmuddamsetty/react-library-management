import moment from 'moment';

const books = [
  {
    id: '1',
    title: 'React Book',
    description: 'This is the first react book',
    price: 54500,
    publishedAt: 0,
  },
  {
    id: '2',
    title: 'Angular Book',
    description: 'This is the first angular book',
    price: 74500,
    publishedAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    title: 'Node Book',
    description: 'This is the first node book',
    price: 64500,
    publishedAt: moment(0).add(4, 'days').valueOf(),
  },
];

export default books;
