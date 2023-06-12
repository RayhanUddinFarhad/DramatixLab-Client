import React from 'react';
import Slider from 'react-slick';
import Banner from './Banner/Banner';
import PopularClasses from './popularclass/PopularClasses';
import TopInstructor from './Instructors/TopInstructor';
import RocketScrollAnimation from '../../shared/RocketScrollAnimation';
import PerformanceShowCase from '../../shared/PerformanceShowcase'
import AnotherExtraSection from './AnotherExtraSection';
import SampleClass from './SampleClass';

const Home = () => {
    return (
        <>

        <div className='space-y-10'>

<Banner></Banner>

<PopularClasses></PopularClasses>

<AnotherExtraSection></AnotherExtraSection>

<TopInstructor></TopInstructor>
<PerformanceShowCase></PerformanceShowCase>


</div>
        
        </>
    );
};

export default Home;