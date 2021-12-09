import React from 'react';
import './QuickChat.css';

class QuickChat extends React.Component{

    constructor(props){
        super(props);

        this.chatStatus = this.chatStatus.bind(this);
    }
    componentDidMount() {
    }
    
    render(){
        return(
            <div className="quick-chat__wrapper" data-hidden="true">
                <div className="quick-chat__top-bar">
                    <button onClick={this.quickChatHandleClick}>＿</button>
                </div>
                Quick Chat
            </div>
        );
    }
    
    chatStatus(){
        const chatWrapper = document.querySelector('.quick-chat__wrapper');

        console.log(chatWrapper);
        // if(chatWrapper.getAttribute('data-hidden') === 'true'){
        //     chatWrapper.setAttribute('aria-hidden', 'false'); 
        // }else{
        //     chatWrapper.setAttribute('aria-hidden', 'true'); 
        // }
    }

}

export default QuickChat;