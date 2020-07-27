export const CardState =     {
  tasks: {
      'dummy-1': { 
          id: 'dummy-1', 
          title: 'Research feature',
          assignee: 'Iyuuu',
          start_date: '27-9-20',
          end_date: '28-9-20',
          tags: 'Research'
      },
      'dummy-2': { 
        id: 'dummy-2', 
        title: 'Set up server',
        assignee: 'Iyuuu',
        start_date: '27-9-20',
        end_date: '28-9-20',
        tags: 'Dev Ops'
      }
  },
  cards: {
      'card-1': {
          id: 'card-1',
          title: 'Backlog',
          taskIds: ['dummy-1', 'dummy-2'],
          color: '#FFBA08',
      },
      'card-2': {
          id: 'card-2',
          title: 'To Do',
          taskIds: [],
          color: '#FFBA08',
      },
      'card-3': {
          id: 'card-3',
          title: 'Done',
          taskIds: [],
          color: '#FFBA08',
      },
  },
  cardOrder: ['card-1', 'card-2', 'card-3']
}