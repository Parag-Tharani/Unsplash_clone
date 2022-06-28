import React from 'react';
import './App.css';

function App() {
  const [items, setitem] = React.useState([]);
  const [items1, setitem1] = React.useState([]);
  const [items2, setitem2] = React.useState([]);
 var index =1
// function fetchdata(index) {
  
// }
  for ( index; index < 2; index++) {
    fetch(`https://api.unsplash.com/search/photos?page=${index}&query=office&per_page=30&client_id=DXYD_GyjDUwagXbKcj_4HvYGwkxDp8HKCkwXUJ12rT8`)
      .then((res) => res.json())
      .then((res) => setitem(res.results)); fetch(`https://api.unsplash.com/search/photos?page=${index+1}&query=office&per_page=30&client_id=DXYD_GyjDUwagXbKcj_4HvYGwkxDp8HKCkwXUJ12rT8`)
        .then((res) => res.json())
      .then((res) => setitem1(res.results)); fetch(`https://api.unsplash.com/search/photos?page=${index +2}&per_page=30&query=office&client_id=DXYD_GyjDUwagXbKcj_4HvYGwkxDp8HKCkwXUJ12rT8`)
        .then((res) => res.json())
        .then((res) => setitem2(res.results));
  }
  
  return (
    <> <>
    <div className="App">
      <div className="image_box">
        {items?.map((item) => (
                <div key={item.id} className="card">
                  <img src={item.urls.full} alt="" />
                </div>
              ))}
      </div>
      <div className="image_box">
          {items1?.map((item) => (
        <div key={item.id} className="card">
          <img src={item.urls.full} alt="" />
        </div>
      ))}
      </div>
      <div className="image_box">
            {items2?.map((item) => (
        <div key={item.id} className="card">
          <img src={item.urls.small} alt="" />
        </div>
      ))}
      </div>          
      </div>
    </>
    </>

  );
}

export default App;




// import { useState } from "react";

// import { Container, Grid,  Item, Button } from "semantic-ui-react";
// import "./App.css";

// function App() {
//   const [origImage, setOrigImage] = useState("");
//   const [origImageFile, setOrigImageFile] = useState("");
//   const [fileName, setFileName] = useState("");

//   const handle = (e) => {

//     const imageFile = e.target.files[0];
//     setOrigImage(imageFile);
//     setOrigImageFile(URL.createObjectURL(imageFile));
//     setFileName(imageFile.name);
//   }; 
   
//   return (
//     <div className="App">
//       <Container>
//         <Grid>
//           <Grid.Column width={6}>
//             <Item>
//             </Item>
//           </Grid.Column>
//           <Grid.Column width={4}>
//             <input
//               type="file"
//               accept="image/*"
//               className="mt-2 btn btn-dark w-75"
//               onChange={(e) => handle(e)}
//             />
//               <Button>
//               <a href={origImage} download={fileName}>
//                   {" "}
//                   Download Image
//                 </a>
//               </Button>

//           </Grid.Column>
//         </Grid>
//       </Container>
//     </div>
//   );

// }

// export default App;