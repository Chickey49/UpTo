import { React, useState, useEffect } from 'react'
import { Card, InputGroup, FormControl } from 'react-bootstrap'
import user from './userSchema'

export default function Signup() {
    const [userState, setUserState] = useState();

    setUserState(user);
    console.log(userState);

    const handleFirstname = (e) => {
        setUserState({
            Name: {
                first: e.val()
            }
        });
        console.log(user)
    }
    return (
        <div>
            <Card>
                <Card.Title></Card.Title>
                <InputGroup className="mb-3">
                    <FormControl onChange={handleFirstname}
                        placeholder="First Name"
                        aria-label="First Name"
                    />
                </InputGroup>
            </Card>
        </div>
    )
}

