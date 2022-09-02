import { useAge } from '@use-kit/hooks'

export const users = [
  {
    id: 'akashi-sai',
    name: 'akashi',
    birth: '1997-09-28',
    age: useAge('1997-09-28'),
  }, {
    id: 'saito-asuka',
    name: 'asuka',
    birth: '1998-08-10',
    age: useAge('1998-08-10'),
  }, {
    id: 'kubo-shiori',
    name: 'shiori',
    birth: '2001-07-14',
    age: useAge('2001-07-14'),
  }, {
    id: 'inoue-nagi',
    name: 'nagi',
    birth: '2005-02-17',
    age: useAge('2005-02-17'),
  },
  {
    id: 'umezawa-minami',
    name: 'ume',
    birth: '1999-01-06',
    age: useAge('1999-01-06'),
  },
]

// console.log('user', users)
