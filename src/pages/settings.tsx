import React, { FC } from 'react';
import Dashboard from '../components/layout/Dashboard';
import gql from 'graphql-tag';
import { useSettingsQuery } from '../generated/graphql';

export const query = gql`
    query SettingsQuery {
        users {
            id
            name
            email
            address {
                id
                street
                description
                zipcode
            }
        }
    }
`;

const Settings: FC = () => {
    const { data } = useSettingsQuery();
    return (
        <Dashboard>
            <pre>{JSON.stringify(data, null, 4)}</pre>
            <pre>{JSON.stringify(data, null, 4)}</pre>
            <pre>{JSON.stringify(data, null, 4)}</pre>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </Dashboard>
    );
};

export default Settings;
