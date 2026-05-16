import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function TableDashboard () {
    return (
        <div className="container">
                <div className='d-flex justify-content-between mb-3'>
                    <h3>Users</h3>
                <Link to="add" className='btn btn-primary'>Add New Users</Link>

                </div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mazen</td>
          <td>Amir</td>
          <td>@maz</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Youssef</td>
          <td>Ismail</td>
          <td>@you</td>
        </tr>
        
      </tbody>
    </Table>
        </div>

    ); 
}