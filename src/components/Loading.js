import React from 'react';
import {List} from 'react-content-loader'
import Card from './Card/index'

//TODO: DONT REPEAT SO MUCH CODE
const Loading = () => {
    return(
        <div className="container loading-container">
            <Card>
                <List className='card__svg'/>
            </Card>
            <Card>
                <List className='card__svg'/>
            </Card>
            <Card>
                <List className='card__svg'/>
            </Card>
            <Card>
                <List className='card__svg'/>
            </Card>
            <Card>
                <List className='card__svg'/>
            </Card>
        </div>
    );
};

export default Loading