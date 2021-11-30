import { createReducer } from '../utils/reducerUtils';
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './eventConstants';

const intialState = [
  {
    id: '1',
    weeklySermon: 'Study Of The Scripures',
    title: 'Study Of The Scripures Part 5',
    date: '2018-03-27',
    series: 'Study Of The Scripures ',
    sermonBy: 'Pastor Maina',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    audio: 'Holy are you Lord',
    video: 'Video link',
  },
  {
    id: '2',
    weeklySermon: 'Study Of The Scripures',
    title: 'Study Of The Scripures Part 5',
    date: '2018-03-27',
    series: 'Study Of The Scripures ',
    sermonBy: 'Pastor Maina',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    audio: 'Holy are you Lord',
    video: 'Video link',
  },
];

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updateEvent = (state, payload) => {
  return [
    ...state.filter((event) => event.id !== payload.event.id),
    Object.assign({}, payload.event),
  ];
};

export const deleteEvent = (state, payload) => {
  return [...state.filter((event) => event.id !== payload.eventId)];
};

export default createReducer(intialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
});
