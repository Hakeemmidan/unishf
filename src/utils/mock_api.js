export const getHeroes = () => {
  return Promise.resolve([
    {
      id: 1,
      name: 'Tim Bereners-Lee',
      power: 'Transports objects through HTTP',
      rating: 5,
      image: ''
    },
    {
      id: 2,
      name: 'Linus Torvalds',
      power: 'Does Linux things',
      rating: 5,
      image:
        'https://cdn.britannica.com/w:400,h:300,c:crop/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg'
    },
    {
      id: 2,
      name: 'Batman',
      power: 'Money',
      rating: 4,
      image: 'https://i.pinimg.com/736x/6b/fd/ff/6bfdff0e8ddd4526c97f0ca38fb0b297.jpg'
    }
  ]);
};
