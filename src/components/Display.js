import React from 'react'
import './Detail.css'
const Display = (props) => {
    const {data}=props;
    const {sys}=props;

    const {name}=props;
    const {blog}=props;
    return (
        
        <div className="display">
            <div>
            <h3>blog:"<span className="ok">{blog}</span>"</h3>
            <br/>
            <h3>Login:"<span className="ok">{data}</span>"</h3>
            <br/>
            <h3>Node Id:"<span className="ok">{sys}</span>"</h3>
            <br/>
            <h3>Type:"<span className="ok">{name}</span>"</h3>
            <br/>
            
            </div>
            
        </div>
    )
}

export default Display
