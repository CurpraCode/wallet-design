import React from 'react';
import Footer from "../components/Footer";
import View from "../components/View";
import Platform from "../components/Platform";
import Graph from "../components/Graph";
import How from "../components//How";
import Start from "../components/Start";
import Cards from "../components/Cards";

function Home() {
    return (
        <div>
            <View/>
            <Cards/>
            <Platform/>
            <How/>
            <Graph/>
            <Start/>
            <Footer/>
        </div>
    )
}

export default Home