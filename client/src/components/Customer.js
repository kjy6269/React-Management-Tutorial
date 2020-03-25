import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.userSeq}</TableCell>
                <TableCell>{this.props.userId}</TableCell>
                <TableCell>{this.props.userNm}</TableCell>
                <TableCell>{this.props.userEmail}</TableCell>
                <TableCell>{this.props.userTelno}</TableCell>
            </TableRow>
        )
    }
}



export default Customer;