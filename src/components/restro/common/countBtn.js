import React from 'react';

import './countBtn.css';

export const CountBtn = (props) => {
    const isReadOnly = props.isReadOnly;
    return (
        <div>
            <span className="count-btn">
                <div className="super_number menu">
                    <span>
                        {!isReadOnly && <button className="ui left attached button dec" onClick={props.increment}>
                            –
                        </button>}

                        <input type="text" value={props.val} readOnly/>
                        
                         {!isReadOnly && <button className="ui right attached button inc" onClick={props.decrement}>
                            +
                        </button>}
                    </span>
                </div>
            </span>
        </div>
    )
}