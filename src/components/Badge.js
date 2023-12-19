import React from 'react';

function Badge(props) {
    if(props.type === 'low'){
        return <div className="badge-low">Low</div>
    }
    else if(props.type === 'medium'){
        return <div className="badge-medium">Medium</div>
    }
    else if(props.type === 'high'){
        return <div className="badge-high">High</div>
    }

    return null
}

export default Badge