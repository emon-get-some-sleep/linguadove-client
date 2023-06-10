import React from 'react';

const Instructors = () => {
    return (
        <div>
            <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center my-10">Instructors</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
  <tr>
    <th class="bg-[#B260EC] text-white font-bold">Name</th>
    <th class="bg-[#B260EC] text-white font-bold">Image</th>
    <th class="bg-[#B260EC] text-white font-bold">Email</th>
    <th class="bg-[#B260EC] text-white font-bold">Number Of Classes</th>
    <th class="bg-[#B260EC] text-white font-bold"></th>
  </tr>
</thead>

    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
        <p>Revecca Hill</p>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-full w-12 h-12">
                <img src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2019/02/team_01.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>rebeccahill@outlook.com</td>
        <td>
        <div className="badge badge-secondary">3</div>
        </td>
      </tr>
     
      
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Instructors;