import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
            <CommentDetail author = "Arman" timeAgo="Today at 9:45AM" writeUp="I am proud of you brother" avatar={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail author = "Bunty" timeAgo="Today at 6:19PM" writeUp="Very well done bro" avatar={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail author = "Alid" timeAgo="Yesterday at 1:02AM" writeUp="It was very graceful man!" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))