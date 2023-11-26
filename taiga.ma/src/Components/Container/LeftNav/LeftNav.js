import React, { useEffect, useState } from 'react';
import { BarChart } from 'react-bootstrap-icons';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("../../DataBase/LeftNav.json")
      .then(response => response.json())
      .then(data => setCategories(data))  // Update state with the fetched categories
      .catch(error => console.error('Error fetching data:', error));
  }, []);  // Empty dependency array to run the effect only once when the component mounts

  return (
    <div style={{ width: "18%", background: "#1A192D" }} className='rounded'>

      <div style={{ background: "#FF08A7", fontSize: "18px" }} className='rounded-top p-2'>
        <span><BarChart /> Catégories</span>
      </div>

      <div>
        {/* Render categories here */}
        <ul>
          {categories.map(category => (
            <li key={category.id}>{category.name}</li>
            // Replace "id" and "name" with the actual properties in your JSON data
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
