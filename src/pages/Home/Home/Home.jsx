import React from 'react';
import ShowSlider from '../../ShowSlider/ShowSlider';
import PopularCourses from '../../PopularCourses/PopularCourses';
import PopularInstructors from '../../PopularInstructors/PopularInstructors';
import WhyChoose from '../../WhyChoose/WhyChoose';


const Home = () => {
    return (
        <div>
            <ShowSlider></ShowSlider>
            <PopularCourses></PopularCourses>
            <PopularInstructors></PopularInstructors>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;