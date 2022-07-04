import React from 'react';
import NasaDailyImage from './components/nasaDaily';

export function App() {
    return <main className="main-content">
        <h1>Daily image from NASA</h1>
        <NasaDailyImage />
    </main>;
}