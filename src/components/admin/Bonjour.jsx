import React, { useState, useEffect } from 'react';

function DonnéesAPI() {
  const [données, setDonnées] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setDonnées(data));
  }, []);

  return (
    <div>
      {données.map((item) => (
        <p key={item.id}>{item.nom}</p>
      ))}
    </div>
  );
}
  
