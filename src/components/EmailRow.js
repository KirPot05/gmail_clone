import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/EmailRow.css';
import {useDispatch} from 'react-redux'
import { selectMail } from '../features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const openMail = () => {
		dispatch(selectMail({
			id, 
			title, 
			subject, 
			description, 
			time
		}));

		navigate('/mail');
	}


	return (
		<div className='emailRow' onClick={openMail}>
			<div class="emailRow__options">
				<Checkbox />
				<IconButton>
					<StarBorderOutlined />
				</IconButton>

				<IconButton>
					<LabelImportantOutlined />
				</IconButton>
			</div>

			<h3 class="emailRow__title">
				{title}
			</h3>

			<div class="emailRow__message">
				<h4>{subject} <span class="emailRow__description"> {"  -  " + description}</span> </h4>
				
			</div>

			<p class="emailRow__time"> {time} </p>
		</div>
	)
}

export default EmailRow;