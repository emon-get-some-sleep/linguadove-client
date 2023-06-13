import React from 'react';
import useEnrolledClasses from '../../hooks/useEnrolledClasses';
import SinglePaymentHistory from './SinglePaymentHistory';

const PaymentHistory = () => {
    const [enrolledClasses] = useEnrolledClasses();
    const compareDates = (paymentA, paymentB) => {
        const date1 = new Date(paymentA.date);
        const date2 = new Date(paymentB.date);
        return date1 - date2;
      };
      const sortedPaymentHistory = enrolledClasses.sort(compareDates);
      console.log(sortedPaymentHistory);
    return (
        <div className=''>
        <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center mb-10">
         Payment Hisotry
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#2f57ef] text-white font-bold">Name</th>
                <th className="bg-[#2f57ef] text-white font-bold">Transaction Id</th>
                <th className="bg-[#2f57ef] text-white font-bold">Email</th>
                <th className="bg-[#2f57ef] text-white font-bold">Price</th>
                <th className="bg-[#2f57ef] text-white font-bold">Date</th>
               
              </tr>
            </thead>
  
            <tbody>
              {/* row 1 */}
              {
                sortedPaymentHistory.map(paymentInfo => <SinglePaymentHistory key={paymentInfo._id} paymentInfo={paymentInfo}></SinglePaymentHistory>)
              }
           
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PaymentHistory;