import React, { useState } from 'react';
import Loader from './Loader';
import MultiLineInput from './MultiLineInput';
import SingleLineInput from './SingleLineInput';

export default function WasThisHelpful({pageId}) {
    const [isHelpfulSubmitted, setIsHelpfulSubmitted] = useState(false);
    const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
    const [questionOpacity, setQuestionOpacity] = useState(1);
    const [feedbackOpacity, setFeedbackOpacity] = useState(1);
    const [feedbackQuality, setFeedbackQuality] = useState('');
    const [feedbackPlaceholder, setFeedbackPlaceholder] = useState('');
    const [userFeedback, setUserFeedback] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [awaitingResponse, setAwaitingResponse] = useState(false);
    const transitionTime = 500;

    var questionStyle = {
        opacity: `${questionOpacity}`,
        transition: `${transitionTime}ms`
    };

    var feedbackStyle = {
        opacity: `${feedbackOpacity}`,
        transition: `${transitionTime}ms`
    };

    const helpfulQuestion = () => {
        return(
            <div className="question" style={questionStyle}>
                <div className="text">Was this page helpful?</div>
                <button onClick={() => submitHelpful('good')} className="secondary-button">Yes</button>
                <button onClick={() => submitHelpful('bad')} className="secondary-button">No</button>
            </div>
        )
    };
    
    const feedbackInput = () => {
        return(
            <div className="feedback" style={feedbackStyle}>
                <MultiLineInput label={'Feedback'} changeFunction={handleFeedback} placeholder={feedbackPlaceholder} value={userFeedback}/>
                <SingleLineInput label={'Email'} changeFunction={handleEmail} placeholder={''} value={userEmail} note={'This will only be used to contact you regarding this feedback.'}/>
                <button onClick={() => submitFeedback()} className="secondary-button">
                    {awaitingResponse ? <Loader ringSize='18'/> : `Submit`}
                </button>
                
            </div>
        )
    };

    const feedbackSubmitted = () => {
        return(
            <div className="feedback-submitted">{userEmail ? `Thanks! Your feedback has been submitted. We will contact you at ${userEmail}` : `Thanks! Your feedback has been submitted.`}</div>
        )
    };

    const handleFeedback = (e) => {
        setUserFeedback(e.target.value);
    };

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }

    const submitHelpful = (isHelpful) => {
        setFeedbackQuality(isHelpful);
        setQuestionOpacity(0);
        setFeedbackPlaceholder(isHelpful=='good' ? 'How was this page helpful?' : 'What can we improve?');
        
        setTimeout(() => {
            setIsHelpfulSubmitted(true);
        }, transitionTime)
    };

    const submitFeedback = async () => {
        const feedbackBody = {
            pageId: pageId,
            feedbackType: feedbackQuality,
            feedbackString: userFeedback,
            userEmail: userEmail
        };
        setAwaitingResponse(true);

        fetch('https://eowxoldwz4d7syt.m.pipedream.net', {
            method: 'POST',
            body: JSON.stringify(feedbackBody)
        }).then(
            (response) => {
                if(response.status == '200') {
                    setAwaitingResponse(false);
                    setFeedbackOpacity(0);

                    setTimeout(() => {
                        setIsFeedbackSubmitted(true);
                    }, transitionTime)
                } else {

                }
                console.log(response);
            }
        ).catch()
    };

    return (
        <div className="was-this-helpful">
            <hr/>
            {(!isHelpfulSubmitted && !isFeedbackSubmitted) && helpfulQuestion()}
            {(isHelpfulSubmitted && !isFeedbackSubmitted) && feedbackInput()}
            {(isHelpfulSubmitted && isFeedbackSubmitted) && feedbackSubmitted()}
            <hr/>
        </div>
    );
}
