import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from "@mui/icons-material"
import { Checkbox, IconButton } from "@mui/material"
import '../styles/EmailList.css';
import EmailRow from "./EmailRow";
import Section from "./Section";

function EmailList() {
    return (
        <div className="emailList">
            <div class="emailList__settings">
                <div class="emailList__settingsLeft">
                    <Checkbox />

                    <IconButton> <ArrowDropDown /> </IconButton>
                    <IconButton> <Redo /> </IconButton>
                    <IconButton> <MoreVert /> </IconButton>

                </div>

                <div class="emailList__settingsRight">

                    <IconButton> <ChevronLeft /> </IconButton>
                    <IconButton> <ChevronRight /> </IconButton>
                    <IconButton> <KeyboardHide /> </IconButton>
                    <IconButton> <Settings /> </IconButton>

                </div>
            </div>

            <div class="emailList__sections">
                <Section Icon={Inbox} title="Primary" color="red" selected={true} />
                <Section Icon={People} title="Social" color="blue" />
                <Section Icon={LocalOffer} title="Promotions" color="green" />
            </div>


            <div class="emailList__list">
                <EmailRow
                    title="Twitch"
                    subject="Hey Streamer"
                    description="This is a test"
                    time="10pm"
                />

                <EmailRow
                    title="Twitch"
                    subject="Hey Streamer"
                    description="This is a test"
                    time="10pm"
                />
            </div>

        </div>
    )
}

export default EmailList