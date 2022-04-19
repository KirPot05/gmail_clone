import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from "@mui/icons-material"
import { Checkbox, IconButton } from "@mui/material"
import { useEffect, useState } from "react";
import '../styles/EmailList.css';
import EmailRow from "./EmailRow";
import Section from "./Section";
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {db} from '../firebase';

function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {

        const getEmailsQuery = query(collection(db, 'emails'), orderBy('timestamp', 'desc'));

        const unsub = onSnapshot(getEmailsQuery, (snapshot) => {
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id, 
                data: doc.data()
            })))
        })

        return () => unsub();

    }, []);

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
                {/* Dummy Email Row */}
                {/* <EmailRow
                    title="Twitch"
                    subject="Hey Streamer"
                    description="This is a test"
                    time="10pm"
                /> */}

                {emails.map(({id, data: {to, subject, message, timestamp}}) => {
                    return (<EmailRow 
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}

                    />)
                })}


            </div>

        </div>
    )
}

export default EmailList