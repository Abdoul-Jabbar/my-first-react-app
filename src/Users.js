import React from 'react';
import UserProfile from './UserProfile';
import UserNumber from './UserNumber';
import { Names } from './Names';
import { Route, Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';

export default function Users() {
    let { path, url } = useRouteMatch();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    let sortOrder = queryParams.get('order');

    const cloneNames = [...Names];
    
    const sortData = (arr, sortOption) => {
        let result;
        if(sortOption === 'asc') {
            result = arr.sort((a,b) => a > b ? 1 : -1);
        } else if (sortOption === 'desc') {
            result = result = arr.sort((a,b) => a > b ? -1 : 1);
        } else {
            result = Names;
        }

        return result;
    }

    let NamesResult = sortData(cloneNames, sortOrder);

    const history = useHistory();
    const handleChange = ({ target }) => {
        let sortVal = target.value;
        if(sortVal === 'asc' || sortVal === 'desc') {
            history.push(`${url}?order=${sortVal}`);
        } else {
            history.push(`${url}`);
        }
    }

    return (
        <div>
            <div>
                <label style={{fontSize: '16px'}} htmlFor='orderby'>Order by:  </label>
                <select name='orderby' id='orderby' onChange={handleChange}>
                    <option value='default'>Default</option>
                    <option value='asc'>Asc</option>
                    <option value='desc'>Desc</option>
                </select>
            </div>
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