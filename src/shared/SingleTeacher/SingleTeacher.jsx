import React from 'react';

const SingleTeacher = ({teacherInfo}) => {
    const {name, image,  email} = teacherInfo;
    return (
        <tr>
              <td>
                <p>{name}</p>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="rounded-full w-12 h-12">
                      <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{email}</td>
              
            </tr>
    );
};

export default SingleTeacher;