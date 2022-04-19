import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import '../styles/SendMail.css';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import {db} from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


function SendMail() {

	const { register, handleSubmit, formState: {errors}} = useForm();
	const dispatch = useDispatch();


	const onSubmit = async (formData) => {
		closeMail();
		
		await addDoc(collection(db, 'emails'), {
			to: formData.to,
			subject: formData.subject, 
			message: formData.message,
			timestamp: serverTimestamp()
		});

	}

	const closeMail = () => {
		dispatch(closeSendMessage());
	}

	return (
		<div className='sendMail'>
			<div className="sendMail__header">
				<h3> New Message </h3>
				<Close className='sendMail__close' onClick={closeMail}/>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				
				<input 
					type="email" 
					name='to' 
					placeholder='To'
					{...register("to", {required: true})}
				/>
				{errors.to && <p className='sendMail__error'>Enter a valid email address</p>}
				
				<input 
					type="text" 
					name='subject' 
					placeholder='Subject'
					{...register("subject",{required: true})}
				/>
				{errors.subject && <p className='sendMail__error'>Subject is required!</p>}


				<textarea 
					name="message" 
					cols="30" 
					rows="6"
					placeholder='Enter your message here...' 
					className='sendMail__message' 
					{...register("message",{required: true})}
				/>
				{errors.message && <p className='sendMail__error'>Message is required!</p>}


				<div class="sendMail__options">
					<Button 
						className='sendMail__send'
						variant='contained'
						color='primary'
						type='submit'
					> Send </Button>
				</div>

			</form>

		</div>
	)
}

export default SendMail