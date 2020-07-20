import {getDataAPI} from "../api/api";

const SET_HOME_PROFILE = 'SET_HOME_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    photo: null,
    firstName: null,
    secondName: null,
    age: null,
    friendsCount: null,
    isFetching: true
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_PROFILE:
            return {
                ...state,
                ...action.profile
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default: return {...state}
    }
};

export default homeReducer;

export const setHome = (profile) => ({type: SET_HOME_PROFILE, profile});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getHome = () => {
    return (dispatch) => {
        getDataAPI.getProfileInfo().then(
            response =>
            {
                let getAge = () => {
                    let bDate = new Date(response.bdate).getFullYear();
                    if(isNaN(bDate)) {
                        // если год рождения не указан вернется NaN
                        return false
                    }
                    let date = new Date().getFullYear();
                    let age = date - bDate;
                    return age;
                };

                let profile ={
                    photo: response.photo_200,
                    firstName: response.first_name,
                    secondName: response.last_name,
                    friendsCount: response.counters.friends,
                    age: getAge()
                };
                dispatch(setHome(profile));
                dispatch(toggleIsFetching(false));
            }
        );
    }
};
