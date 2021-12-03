import { filterByNameAndPower, sortBy } from './general';

export const getHeroes = (filterInput = '', sortByCol = 'name') => {
  let res = [
    {
      id: 1,
      name: 'Tim Bereners-Lee',
      description: 'https://en.wikipedia.org/wiki/Tim_Berners-Lee',
      power:
        'Transports objects through HTTP, and is the Director of the World Wide Web Consortium (W3C)',
      rating: 5,
      image: ''
    },
    {
      id: 2,
      name: 'Linus Torvalds',
      description: 'https://en.wikipedia.org/wiki/Linus_Torvalds',
      power: 'Does Linux things',
      rating: 5,
      image:
        'https://cdn.britannica.com/w:400,h:300,c:crop/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg'
    },
    {
      id: 3,
      name: 'Batman',
      description: 'https://en.wikipedia.org/wiki/Batman',
      power: 'Money',
      rating: 4,
      image: 'https://i.pinimg.com/736x/6b/fd/ff/6bfdff0e8ddd4526c97f0ca38fb0b297.jpg'
    }
  ];

  if (filterInput) {
    res = filterByNameAndPower(res, filterInput);
  }

  res = sortBy(res, sortByCol);

  return Promise.resolve(res);
};
