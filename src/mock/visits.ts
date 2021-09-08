import { IVisits } from '../interfaces/interfaces';


export const visits: Array<IVisits> = [
  {
    salon: {
      name: 'BJ на Большой Васильковской',
      address: 'Киев, ул. Большая Васильковская, 17',
      nearestAvailableTime: new Date(),
      closestTime: new Date(),
      phoneNumber: '068 955 45 63'
    },
    specialists: {
      id: '1',
      name: 'Анна Кириленко',
      speciality: [
        'Косметолог',
        'Массажист'
      ],
      rating: 4,
      ratingCount: 12,
      availableTime: [new Date()],
      comments: [
        {
          id: '1',
          createdAt: new Date(),
          text: 'Профессиональное обслуживание! Довольна результатом.',
          rating: 5,
          addedBy: 'Наталья'
        },
        {
          id: '2',
          createdAt: new Date(),
          text: 'Очень довольна результатом, отличный мастер!',
          rating: 2,
          addedBy: 'Ирина'
        },
      ]
    },
    services: [
      {
        id: 10,
        image: 'https://www.psypost.org/wp-content/uploads/2018/10/young-attractive-woman.jpg',
        title: 'Ламинирование PRO ',
        price: 400,
        duration: 45,
        category: 'head'
      },
      {
        id: 11,
        image: 'https://www.psypost.org/wp-content/uploads/2018/10/young-attractive-woman.jpg',
        title: 'Ламинирование PRO ',
        price: 400,
        duration: 45,
        category: 'head'
      }
    ],
    time: '20 мар 21 10:30'
  },
  {
    salon: {
      name: 'BJ на Большой Васильковской',
      address: 'Киев, ул. Большая Васильковская, 17',
      nearestAvailableTime: new Date(),
      closestTime: new Date(),
      phoneNumber: '068 955 45 63'
    },
    specialists: {
      id: '1',
      name: 'Анна Кириленко',
      speciality: [
        'Косметолог',
        'Массажист'
      ],
      rating: 4,
      ratingCount: 12,
      availableTime: [new Date()],
      comments: [
        {
          id: '1',
          createdAt: new Date(),
          text: 'Профессиональное обслуживание! Довольна результатом.',
          rating: 5,
          addedBy: 'Наталья'
        },
        {
          id: '2',
          createdAt: new Date(),
          text: 'Очень довольна результатом, отличный мастер!',
          rating: 2,
          addedBy: 'Ирина'
        },
      ]
    },
    services: [
      {
        id: 10,
        image: 'https://www.psypost.org/wp-content/uploads/2018/10/young-attractive-woman.jpg',
        title: 'Ламинирование PRO ',
        price: 400,
        duration: 45,
        category: 'head'
      },
      {
        id: 11,
        image: 'https://www.psypost.org/wp-content/uploads/2018/10/young-attractive-woman.jpg',
        title: 'Ламинирование PRO ',
        price: 400,
        duration: 45,
        category: 'head'
      }
    ],
    time: '20 мар 21 10:30'
  },
  {
    salon: {
      name: 'BJ на Большой Васильковской',
      address: 'Киев, ул. Большая Васильковская, 17',
      nearestAvailableTime: new Date(),
      closestTime: new Date(),
      phoneNumber: '068 955 45 63'
    },
    specialists: {
      id: '1',
      name: 'Анна Кириленко',
      speciality: [
        'Косметолог',
        'Массажист'
      ],
      rating: 4,
      ratingCount: 12,
      availableTime: [new Date()],
      comments: [
        {
          id: '1',
          createdAt: new Date(),
          text: 'Профессиональное обслуживание! Довольна результатом.',
          rating: 5,
          addedBy: 'Наталья'
        },
        {
          id: '2',
          createdAt: new Date(),
          text: 'Очень довольна результатом, отличный мастер!',
          rating: 2,
          addedBy: 'Ирина'
        },
      ]
    },
    services: [
      {
        id: 10,
        image: 'https://www.psypost.org/wp-content/uploads/2018/10/young-attractive-woman.jpg',
        title: 'Ламинирование PRO ',
        price: 400,
        duration: 45,
        category: 'head'
      },
      {
        id: 11,
        image: 'https://www.psypost.org/wp-content/uploads/2018/10/young-attractive-woman.jpg',
        title: 'Ламинирование PRO ',
        price: 400,
        duration: 45,
        category: 'head'
      }
    ],
    time: '20 мар 21 10:30'
  },
];
