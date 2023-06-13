import React from 'react';

const SinglePaymentHistory = ({paymentInfo}) => {
    const {transactionId, name, email, price, date} = paymentInfo;
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
                <td> {date}</td>
                
              </tr>
    );
};

export default SinglePaymentHistory;