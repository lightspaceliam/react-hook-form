import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { connect } from 'react-redux';
import { AppState } from '../../store';
import { submitPerson } from '../../store/person';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { List, ListItem } from '@material-ui/core';

import Person from '../../interfaces/Person';
import PersonInitialState from '../../interfaces/PersonInitialState';
import Input from '../../components/FormCtrls/Input';

import styles from './styles/reactHookFormExample';

type FormModel = {
    firstName: string;
    lastName: string;
    email: string;
}; 

interface ReactHookFormExampleProps {
    requestSubmitPerson: (person: Person) => void;
    submitPerson: typeof submitPerson;
    personState: PersonInitialState;
}

const ReactHookFormExample: FC<ReactHookFormExampleProps> = ({
    requestSubmitPerson,
    personState,
}): JSX.Element => {

    const classes = styles();

    const {
        register, 
        handleSubmit,
        errors,
    } = useForm<FormModel>({
        validateCriteriaMode: 'all',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: ''
        }
    });

    const onSubmit = (formModel: Person): void => {
        requestSubmitPerson(formModel);
    };

    return (
        <Grid container alignItems='center'>
            <Grid item 
                xs={12}>
                <Typography 
                    component='h1'
                    className={classes.h1}>
                    React Hook Form Example
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.formGroup}>
                        <Input name='firstName'
                            label='First Name'
                            ref={register({
                                required: 'First Name is required.',
                                maxLength: {
                                    value: 150,
                                    message: 'First name exeeds 150 characters.'
                                }
                            })}
                            errorMessage={errors.firstName?.message as string} />
                    </div>
                    <div className={classes.formGroup}>
                        <Input name='lastName'
                            label='Last Name'
                            ref={register({
                                required: 'Last name is required.'
                            })}
                            errorMessage={errors.lastName?.message as string} />
                    </div>
                    <div className={classes.formGroup}>
                        <Input name='email'
                            label='Email'
                            ref={register({
                                required: 'Email is required.'
                            })}
                            errorMessage={errors.email?.message as string} />
                    </div>
                    <div className={classes.formGroup}>
                        <Button type='submit'
                            variant='contained' 
                            color='primary'>
                            Submit
                        </Button>
                    </div>
                </form>
            </Grid>
            {personState.loading === false 
                && personState.person.firstName !== '' 
                && personState.errorMessage === undefined &&
                <Grid item
                xs={12}>
                    <Typography 
                        component='h2'
                        className={classes.h2}>Person Model</Typography>
                    <List>
                        <ListItem>
                            {personState.person.firstName}
                        </ListItem>
                        <ListItem>
                            {personState.person.lastName}
                        </ListItem>
                        <ListItem>
                            {personState.person.email}
                        </ListItem>
                    </List>
                </Grid>
            }
            {personState.loading === false
                && personState.errorMessage !== undefined &&
                <p className={classes.errorMessage}>{personState.errorMessage}</p>
            }
        </Grid>
    );
};

const mapStateToProps = (state: AppState) => ({
    personState: state.personState
});

const mapDispatchProps = (dispatch: any) => ({
    requestSubmitPerson: (person: Person) => dispatch(submitPerson(person)),
});

export default connect(mapStateToProps, mapDispatchProps)(ReactHookFormExample);