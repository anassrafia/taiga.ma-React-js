import React, { useEffect, useState } from 'react';
import { BarChart } from 'react-bootstrap-icons'; 

const LeftNav = () => {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(competence => console.log(competence))
  }, [])

  console.log(category);

  return (
    <div style={{ width: "18%", background: "#1A192D" }} className='rounded'>

      <div style={{ background: "#FF08A7", fontSize: "18px" }} className='rounded-top p-2'>
        <span><BarChart /> Catégories</span>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default LeftNav;
