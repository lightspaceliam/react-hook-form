import Person from './Person';

export default interface PersonInitialState {
    person: Person;
    loading: boolean;
    errorMessage?: string | undefined;
}