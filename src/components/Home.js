import React, { useRef, useEffect, useState } from "react";
import "./Home.css";

function Home() {
  
  const [menuList, setMenuList] = useState(
  [
  { firstName: "🍬 Design", lastName: "" },
  { firstName: "", lastName: "" },
  { firstName: "", lastName: "" },
   ]);
  
  // handle input change
  const handleInputChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...menuList];
  list[index][name] = value;
  setMenuList(list);
};
 
// handle click event of the Remove button
  const handleRemoveClick = index => {
  const list = [...menuList];
  list.splice(index, 1);
  setMenuList(list);
};
 
// handle click event of the Add button
  const handleAddClick = () => {
  setMenuList([...menuList, { firstName: "", lastName: "" }]);
};
  
  

  useEffect(() => {
 var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
  btn.onclick = function() {
  modal.style.display = "block";
  
}
// When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    })
  return (
    <div className="App">
      <button id="myBtn">Open Modal</button>
      <div className="row text1" >
        <div className="col1" >
         
          <p><b>Test</b></p>
          <p><a>Main page</a></p>
          <p><a>Recent changes</a></p>
          <p><a>Random page</a></p>
        
       </div>
  <div className="col2" >
        {menuList.map((x, i) => {
        return (
          <div className="box" id="container">
            <div className="col2-title-box">
            <input 
              className="col2-title"
              type="text"
              name="firstName"
   placeholder="Ketik Judul"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            </div>
            
            ​<textarea placeholder="Enter Last Name" name="lastName" id="txtArea" rows="5" cols="70" value={x.lastName}
              onChange={e => handleInputChange(e, i)}></textarea>
            
            
            <div className="btn-box">
              {menuList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {menuList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
          
        );
      })}
      
      <div style={{ marginTop: 20 }}>{JSON.stringify(menuList)}</div>
      
  </div>
  <div className="col3">
    <h4>What's New?</h4>
    <hr/>
      <div>
       <p><b>2021-05-31</b></p>
       <p>some text..</p>
      </div>
  </div>
</div>
 
     
      <div id="myModal" class="modal">
  
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>

    </div>
  );
}

export default Home;