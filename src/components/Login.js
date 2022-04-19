import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth, provider } from '../firebase';
import '../styles/Login.css';

function Login() {

    const dispatch = useDispatch();

    const signIn = async () => {
        const {user} = await signInWithPopup(auth, provider);
        dispatch(login({
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL
        }))
        
    }

    return (
        <div className='login'>
            <div class="login__container">
                <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png" alt="" />

                <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login