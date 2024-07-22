import {React, useState } from 'react';
import uparrow from './images/up-arrow.svg';
import downarrow from './images/down-arrow.svg';
import Movies from './Movies.json';

function Categories() {
  const [Movies_list, setMovies_list] = useState([]);
  const [Movies_array, setMovies_array] = useState(Movies);
  const [expanded,setexpanded] =useState();
  const[arrow,setarrowclass]=useState(false)
  const[arrowimage,setarrowimage]=useState(downarrow)
  const[CategoryValue,setCategoryValue]=useState("Any genre");
    const [items] =useState([
        {
          "label": "Any genre",
          "value": "Any genre"
        },
        {
          "label": "Comedy",
          "value": "Comedy"
        },
        {
          "label": "Thriller",
          "category": "Thriller"
        },
        {
          "label": "Action",
          "value": "Action"
        },
        {
          "label": "Drama",
          "value": "Drama"
        }
      ]);
   
     
     
  
 
       const showCheckboxes=(event)=>{
 
        if(arrow==true){
         setarrowimage(downarrow);
         setarrowclass(false)
        }else{
         setarrowimage(uparrow);
         setarrowclass(true)
        }
 
        var checkboxes = document.getElementById("checkboxes_1");
        if (!expanded) {
            checkboxes.style.display = "block";
            setexpanded(true);
        } else {
            checkboxes.style.display = "none";
            setexpanded(false);
        }
        
     }

     const getCategoryValue=(event)=>{
      const value = event.target.value;
      setCategoryValue(value);
      setMovies_list(Movies_array.filter(data => (data.title.search(value) != -1)));
     }
    return(
        <div className="dropdown" id="valueItemDrop">
        <label className="form-control dropdown-box grid_font"  onClick={showCheckboxes}>
        {CategoryValue}  <img src={arrowimage} className="arrowclass"/>
        </label>
        <div></div>
       
        <ul className="dropdown-menu" aria-labelledby="dLabel" id="checkboxes_1" style={{margin: ".5rem",padding: ".5rem"}}>
        {items.map(item => (
        <li className="checkbox form-group">
                <input type="checkbox" className="check_class"  key={item.value}
                   value={item.value} onClick={getCategoryValue}/>
                {item.label}
            </li>
         ))}
        </ul>
    </div>
    );
  }

  export default Categories;