import React, { useState }from "react";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import moment from "moment/moment";
import ModalContainer from "../ModalContainer/ModalContainer";
import FormSendTweet from "../FormSendTweet";
import { TWEETS_STORAGE} from "../../utils/contants";

import "./SendTweet.scss";

export default function SendTweet(props) {
    const  {setToastProps, allTweets } = props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal (true);
    };
    const closeModal = () => {
        setIsOpenModal (false);
    };
    const sendTweet = (event, formValue) => {
        event.preventDefault();
        //enviar al form submit
        const { name, tweet }= formValue;
        let allTweetsArray = [];
        if(allTweets){
            allTweetsArray = allTweets;
        }
        if(!name || !tweet) {
            setToastProps({
                open: true,
                text: "WARNING: all fields are required" 
            });
        }else{
            formValue.time = moment();
            allTweetsArray.push(formValue);
            //GUARDAR EN EL LOCAL ESTORAGE.
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
            setToastProps({
                open: true,
                text: "this is bery good" 
            });
            closeModal();
        }
        allTweetsArray = [];
    };
    return (
        <div className="send-tweet">
            <Fab 
                className="send-tweet__open-modal" 
                color="primary" 
                aria-label="add"
                onClick = {openModal}
                >
                <Add/>
            </Fab>
            <ModalContainer 
                isOpenModal = {isOpenModal} 
                closeModal={closeModal}>
                <FormSendTweet 
                    sendTweet = {sendTweet} 
                />
            </ModalContainer>
        </div>
    )
};