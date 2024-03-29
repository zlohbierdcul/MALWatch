
// React
import { useState } from 'react';

// Components
import { TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@Components/IconButton/IconButton';

// Utils
import PropTypes from 'prop-types';

// Styling
import './LoginView.css';

// Icons
import { ArrowForwardIosSharp } from '@mui/icons-material';


const LoginView = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length === 0 || password.length === 0) {
            setError(true);
        } else {
            setError(false);
            setLoggedIn(true); // Set loggedIn to true when button is clicked
        }
    };

    return (
        <div className='login-bg d-flex justify-content-center align-items-center'>
            <div className='login-container bg-body-secondary p-5 rounded-5 d-flex flex-column justify-content-center align-items-center'>
                <img
                    src='/assets/logo.png'
                    className='w-25 mb-4'
                ></img>
                <h3
                    className='login-heading text-center mb-4'
                    style={{ color: '#829399' }}
                >
                    <span style={{ color: '#9EE493' }}>Sign in</span> with your{' '}
                    <span style={{ color: '#2e51a2' }}>MAL-Account</span>
                </h3>
                <form
                    onSubmit={handleSubmit}
                    className='login-form w-75 d-flex flex-column justify-content-center align-items-center '
                    style={{color: '#829399'}}
                >
                    <TextField
                        fullWidth
                        id='formUsername'
                        label='Username'
                        variant='outlined'
                        type='text'
                        color='lightGrey'
                        placeholder='Enter username'
                        value={username}
                        onChange={handleUsernameChange}
                        style={{ marginBottom: '1rem' }}
                    />

                    <TextField
                        fullWidth
                        id='formPassword'
                        label='Password'
                        variant='outlined'
                        type='password'
                        color='lightGrey'
                        placeholder='Enter password'
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ marginBottom: '1rem' }}
                    />

                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label='Stay signed in'
                        />
                    </FormGroup>

                    {error && (
                        <div className='error-box w-100 bg-danger rounded-2 p-2 fw-bold' style={{color: 'black'}}>
                            Please try again!
                        </div>
                    )}

                    <IconButton
                        type={'primary'}
                        icon={<ArrowForwardIosSharp />}
                        iconPosition={'right'}
                        style={{ marginTop: '1rem' }}
                        onClick={handleSubmit}
                    >
                        Login
                    </IconButton>
                </form>
            </div>
        </div>
    );
};


LoginView.propTypes = {
    setLoggedIn: PropTypes.func.isRequired, // setLoggedIn prop should be a function and is required
};

export default LoginView;
