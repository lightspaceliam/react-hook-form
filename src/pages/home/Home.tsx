import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Person from '../../interfaces/Person';
import Input from '../../components/FormCtrls/Input';
import styles from './styles/home';

type FormModel = {
    firstName: string;
    lastName: string;
    email: string;
}; 

const Home: FC = (): JSX.Element => {
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

    const onSubmit = (person: Person): void => {
        console.log(person);
        console.log(`First Name: ${person.firstName}`);
    };

    return (
        <Grid container alignItems='center'>
            <Grid item 
                xs={12}>
                <Typography component='h1'>
                    Home
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
        </Grid>
    );
};

export default Home;