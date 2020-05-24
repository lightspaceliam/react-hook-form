import { Action } from "redux";
import Person from "../interfaces/Person";
import PersonInitialState from "../interfaces/PersonInitialState";

/**
 * Action Keys.
 */
export enum PersonActionKeys {
    SUBMIT_ACTION = 'PERSON_SUBMIT_ACTION',
    RECIEVE_ACTION = 'PERSON_RECIEVE_ACTION',
    FAILURE_ACTION = 'PERSON_FAILURE_ACTION',
};

/**
 * Action Types.
 */
export interface SubmitPerson extends Action {
    readonly type: typeof PersonActionKeys.SUBMIT_ACTION,
};

export interface RecievePerson extends Action {
    readonly type: typeof PersonActionKeys.RECIEVE_ACTION,
    readonly person: Person,
};

export interface ErrorPerson extends Action {
    readonly type: typeof PersonActionKeys.FAILURE_ACTION,
    readonly errorMessage: string,
};

export type PersonActionTypes = 
    SubmitPerson | 
    RecievePerson | 
    ErrorPerson;
/**
 * Action Creators.
 */
function submitPerson(model: Person) {
    return async (dispatch: any) => {
        dispatch({
            type: PersonActionKeys.SUBMIT_ACTION
        });

        const entity: Person = {
            firstName: model.firstName,
            lastName: model.lastName,
            email: model.email,
        };

        // dispatch({
        //     type: PersonActionKeys.FAILURE_ACTION,
        //     errorMessage: 'Something went wrong.'
        // });
        
        dispatch({
            type: PersonActionKeys.RECIEVE_ACTION,
            person: entity
        });
    }
}

export {
    submitPerson,
};

/**
 * Initial State.
 */
const initialState: PersonInitialState = {
    person: { firstName: '', lastName: '', email: '' },
    loading: false,
    errorMessage: undefined,
};

/**
 * Reducer.
 */
export function personReducer(
    state = initialState,
    action: PersonActionTypes,
): PersonInitialState {

    switch(action.type) {
        case PersonActionKeys.SUBMIT_ACTION:
            return {
                ...state,
                loading: true,
                errorMessage: undefined,
            };
        case PersonActionKeys.RECIEVE_ACTION:
            return {
                ...state,
                loading: false,
                person: action.person,
                errorMessage: undefined,
            };
        case PersonActionKeys.FAILURE_ACTION:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
};