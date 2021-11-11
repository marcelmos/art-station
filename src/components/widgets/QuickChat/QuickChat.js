import React from 'react';
import './QuickChat.css';

class QuickChat extends React.Component{

    render(){
        return(
            <div class="quick-chat__wrapper" data-hidden="true">
                <div className="quick-chat__top-bar">
                    <button onClick={this.chatStatus(this)}>＿</button>
                </div>
                Quick Chat
            </div>
        );
    }

    chatStatus(){
        const chatWrapper = document.querySelector('.quick-chat__wrapper');
    }

}

export default QuickChat;