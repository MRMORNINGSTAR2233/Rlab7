import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ProfileCard
        name="Bill Gates"
        bio="William Henry Gates III is an American business magnate, software developer, and philanthropist. He co-founded Microsoft Corporation."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg"
        bgColor="#e0f7fa"
      />
    </div>
  );
}

export default App;

