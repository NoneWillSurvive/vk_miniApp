import {getDataAPI} from "../api/api";

const SET_FRIENDS = 'SET_FRIENDS';
const SET_OFFSET = 'SET_OFFSET';
const TOGGLE_FETCHING_DATA = 'TOGGLE_FETCHING_DATA';
const SET_TO_DEFAULT = 'SET_TO_DEFAULT';

let initialState = {
    numberOfFriends: 0,
    friends: [],
    friendsCount: 30,
    offset: 0,
    fetchingData: true
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...state.friends ,...action.friends],
                numberOfFriends: action.numberFriends
            };
        case SET_OFFSET:
            return {
                ...state,
                offset: action.count
            };
        case TOGGLE_FETCHING_DATA:
            return {
                ...state,
                fetchingData: action.fetchingState
            };
        case SET_TO_DEFAULT:
            return {
                ...state,
                friends: [],
                numberOfFriends: 0
            };
        default: return {...state}
    }
};

export default friendsReducer;

const setFriendsData = (friends, numberFriends) => ({type: SET_FRIENDS, friends, numberFriends});
const setOffset = (count) => ({type: SET_OFFSET, count});
const setToDefaultFriends = () => ({type: SET_TO_DEFAULT});
const toggleFetchingData = (fetchingState) => ({type: TOGGLE_FETCHING_DATA, fetchingState});

export const getFriends = (pageSize, offsetSize) => {
    return (dispatch) => {
            dispatch(toggleFetchingData(true));
            getDataAPI.getFriends(pageSize, offsetSize).then(
                response => {
                    dispatch(setFriendsData(response.items, response.count));
                    dispatch(toggleFetchingData(false));
                    dispatch(setOffset(offsetSize + pageSize));

                }
            );
        }
};

export const setDefaultData = () => {
    return (dispatch) => {
        dispatch(setToDefaultFriends());
        dispatch(setOffset(0));
        dispatch(toggleFetchingData(true));
    }
}
