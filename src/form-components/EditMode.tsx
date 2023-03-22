import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="edit-mode-check"
                label="Enter Edit Mode"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode === true ? (
                <Form.Group controlId="formUserName">
                    <Form.Label>Enter name:</Form.Label>
                    <Form.Control value={userName} onChange={updateName} />
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                    <Form.Label>
                        {isStudent === true ? (
                            <span>{userName} is a student</span>
                        ) : (
                            <span>{userName} is not a student</span>
                        )}
                    </Form.Label>
                </Form.Group>
            ) : isStudent === true ? (
                <span>{userName} is a student</span>
            ) : isStudent === false ? (
                <div>
                    <span>{userName} is not a student</span>
                </div>
            ) : editMode === false && isStudent === true ? (
                <span>{userName} is a student</span>
            ) : (
                <span>{userName} is not a student</span>
            )}
        </div>
    );
}
