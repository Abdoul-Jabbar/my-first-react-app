import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Names } from './Names';


export default function UserProfile() {
    let { name } = useParams();
    if(!Names.includes(name)) {
        return <Redirect to='/users' />;
    }

    return (
        <div>
            <p>Hello {name}!</p>
            <p>This is your personnal blog page! Click <Link style={{color: '#DB7424'}} to={`/users/number/${name}`}>here</Link> to get your Magic number!</p>
        </div>
    )
}