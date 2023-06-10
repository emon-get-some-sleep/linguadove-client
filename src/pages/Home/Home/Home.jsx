import React from 'react';
import ShowSlider from '../../ShowSlider/ShowSlider';
import PopularCourses from '../../PopularCourses/PopularCourses';
import PopularInstructors from '../../PopularInstructors/PopularInstructors';


const Home = () => {
    return (
        <div>
            <ShowSlider></ShowSlider>
            <PopularCourses></PopularCourses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;