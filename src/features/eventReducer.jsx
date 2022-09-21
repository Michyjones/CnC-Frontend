import { createReducer } from "../utils/reducerUtils";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

const intialState = [
  {
    id: "1",
    weeklySermon: "Study Of The Scripures",
    date: "2018-03-27",
    series: "Study Of The Scripures ",
    sermonBy: "Pastor Maina",
    description:
      "We had earlier noted that the word “equipping” in Eph 4:16 comes from a root word (a medical term) that carries the thought of setting of a bone, so as to be perfectly joined together. This equipping is necessary so that the body of Christ is healthy and functions as the builder designed it. a. Paul complements this thought as he uses two body anatomy/medical terms (joints and ligaments) in a comparable verse found in - Col 2:19 and not holding fast to the Head, from whom all the body, nourished and knit together by joints and ligaments, grows with the increase that is from God. This growing of the body with ‘increase that is from God’ is a quality term and not a quantity one. This is demonstrated as individual believers in the body of Christ who avail themselves to be taught, progressively mature and consciously supply to the other believers to whom they are joined.",
    audio: "Audio",
    video: "Video",
    notes:"Notes"
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
