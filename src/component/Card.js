import React from 'react'

export default function Card() {
    return (
        <div className="chatbox">
            <div className="chatlogs">


                <div className="chat friend">
                    <div className="userphoto"></div>
                        <p className="chat-message"> what up</p>
                </div>

                <div className="chat self">
                    <div className="userphoto"></div>
                    <p className="chat-message">my name is osazzee</p>
                </div>
            </div>
            <div className="chat-form">
                <textarea></textarea>
                <button>send</button>
            </div>
        </div>
    )
}
