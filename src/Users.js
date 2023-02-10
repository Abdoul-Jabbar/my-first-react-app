import React from 'react';
import UserProfile from './UserProfile';
import UserNumber from './UserNumber';
import { Names } from './Names';
import { Route, Link, useRouteMatch, useLocation } from 'react-router-dom';

export default function Users() {
    let { path, url } = useRouteMatch();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const sortOrder = queryParams.get('order');
    let NamesResult;

    if(sortOrder === 'asc') {
        NamesResult = Names.sort((a,b) => a > b ? 1 : -1);
    } else if (sortOrder === 'desc') {
        NamesResult = Names.sort((a,b) => a > b ? -1 : 1);
    } else {
        NamesResult = Names;
    }
    

    return (
        <div>
            <ul style={{listStyleType: 'none', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px 10px', alignItems: 'center'}}>
                {NamesResult.map((item, y) => {
                    return (
                        <li key={y} style={{fontSize: '16px'}}>
                            {item} [ <Link style={{color: '#248BDB'}} to={`${url}/profile/${item}`}>Profile</Link> / <Link style={{color: '#DB7424'}} to={`${url}/number/${item}`}>Number</Link> ]
                        </li>
                    )
                })}
            </ul>
            <Route path={`${path}/profile/:name`}>
                <UserProfile />
            </Route>
            <Route path={`${path}/number/:name`}>
                <UserNumber />
            </Route>
        </div>
    )
}