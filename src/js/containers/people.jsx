import React, { useEffect }from 'react';
import css from 'css/Page';
import moment from 'moment'
import { connect, useDispatch } from 'react-redux';

import { Table, Button } from 'semantic-ui-react'
import { getAll } from 'actions/people'

function People(props) {
    const { data } = props;
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (data === null ) {
            dispatch(getAll())
        }
    }, [data])

    if (data === null) {
        return null;
    }

    return (
        <div class={css.container}>
            <h3>People</h3>
            <div class={css.actions}>
                <Button size='tiny' primary>Show Frequency</Button>
                <Button size='tiny' primary>Show Duplicates</Button>
            </div>

            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    data.map((person) => (
                        <Table.Row>
                            <Table.Cell>{person.display_name}</Table.Cell>
                            <Table.Cell>{person.email_address}</Table.Cell>
                            <Table.Cell>{person.title}</Table.Cell>
                        </Table.Row> 
                    ))
                }
                </Table.Body>
            </Table>
        </div>
    )
}

export default connect((state) => state)(People);
