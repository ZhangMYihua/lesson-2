import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl, match, }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
            </div>
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div >
    )
}

export default withRouter(MenuItem);