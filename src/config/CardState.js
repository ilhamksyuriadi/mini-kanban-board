export const CardState =     {
  tasks: {
      'dummy-1': { 
          id: 'dummy-1', 
          title: 'Makan',
          assignee: 'Iyuuu',
          start_date: '27-9-20',
          end_date: '28-9-20',
          tags: 'Research'
      }
  },
  cards: {
      'card-1': {
          id: 'card-1',
          title: 'Backlog',
          taskIds: ['dummy-1'],
          color: '#FFBA08',
      },
      'card-2': {
          id: 'card-2',
          title: 'To Do',
          taskIds: [],
          color: '#17C9FF',
      },
      'card-3': {
          id: 'card-3',
          title: 'Done',
          taskIds: [],
          color: '#14E668',
      },
  },
  cardOrder: ['card-1', 'card-2', 'card-3']
}