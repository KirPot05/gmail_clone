import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import '../styles/EmailRow.css';

function EmailRow({id, title, subject, description, time}) {
  return (
    <div className='emailRow'>
        <div class="emailRow__options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlined/>
            </IconButton>

            <IconButton>
                <LabelImportantOutlined/>
            </IconButton>
        </div>

        <div class="emailRow__title">

        </div>

        <div class="emailRow__message">

        </div>

        <div class="emailRow__description">

        </div>
    </div>
  )
}

export default EmailRow;