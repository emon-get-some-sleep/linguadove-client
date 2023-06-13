import React from 'react';

const SinglePaymentHistory = ({paymentInfo}) => {
    const {transactionId, name, email, price, date} = paymentInfo;
    const newDate = new Date(date);
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = newDate.toLocaleDateString('en-US', options);
    return (
        <tr>
                <td>
                  <p>{name}</p>
                </td>
                <td>
                  <p>{transactionId}</p>
                </td>
                <td>{email}</td>
                <td>$ {price}</td>
                <td> {formattedDate}</td>
                
              </tr>
    );
};

export default SinglePaymentHistory;