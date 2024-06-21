import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card 
        title="Beautiful Landscape" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolor." 
        imageUrl="https://images.unsplash.com/photo-1718426566056-0c474f30f68b?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
    </div>
  );
};

export default App;
