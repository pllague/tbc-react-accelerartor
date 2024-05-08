'use client';

import { deleteUserAction } from "../app/actions";

const DeleteUser = ({ id }: {id: number}) => {
    return (
        <button onClick={() => deleteUserAction(id)}>x</button>
    )
}

export default DeleteUser;