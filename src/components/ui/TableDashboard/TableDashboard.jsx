import Table from 'react-bootstrap/Table';
import { Link, useOutletContext } from 'react-router-dom';

export default function TableDashboard () {
    const { profile, columns, users } = useOutletContext(); 

    return (
        <div className="container mt-4">
            <div className='d-flex justify-content-between mb-3 align-items-center'>
                <h3>{profile}</h3>
                <Link to="add" className='btn btn-primary'>Add New User</Link>
            </div>
            
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        {columns && columns.map((colName, index) => (
                            <th key={index}>{colName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={user.id || index}>
                                <td>{index + 1}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.username}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns?.length || 4} className="text-center text-muted">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    ); 
}