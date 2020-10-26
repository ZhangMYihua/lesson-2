import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buton/custom-buttom.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log('error', error);

        }
    }

    handlechange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with you email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handlechange}
                        label='Display Name'
                        required
                    />
                    <FormInput type='email'
                        name='email'
                        value={email}
                        onChange={this.handlechange}
                        label='Email'
                        required
                    />
                    <FormInput type='password'
                        name='password'
                        value={password}
                        onChange={this.handlechange}
                        label='password'
                        required
                    />
                    <FormInput type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handlechange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp