// import React from "react";
import "./App.css";
import banner from "./banner.png";
import squarespace from "./squarespace.svg";
import React, { useState, useEffect } from "react";
import { Loader } from "./components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import search from './components/search'
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

function App() {
  const [images, setImage] = useState([]);
  const [search, setsearch] = useState([]);

  const [images2, setimage2] = React.useState([]);
  const [images3, setimage3] = React.useState([]);
  const [index, setindex] = React.useState([1]);
  // var index=1

useEffect(() => {
  FetchImages();
}, []);

  const FetchImages = ( count =10 ) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

  
    fetch(
      `https://api.unsplash.com/search/photos?page=${index}&per_page=30&query=office&client_id=DXYD_GyjDUwagXbKcj_4HvYGwkxDp8HKCkwXUJ12rT8&count=${count}`
    )
      .then((res) => res.json())
      .then((res) => setImage(res.results));
    fetch(
      `https://api.unsplash.com/search/photos?page=${
        index + 1
      }&per_page=30&query=office&client_id=DXYD_GyjDUwagXbKcj_4HvYGwkxDp8HKCkwXUJ12rT8&count=${count}`
    )
      .then((res) => res.json())
      .then((res) => setimage2(res.results));
    fetch(
      `https://api.unsplash.com/search/photos?page=${index +2}&per_page=30&query=office&client_id=DXYD_GyjDUwagXbKcj_4HvYGwkxDp8HKCkwXUJ12rT8&count=${count}`
    )
      .then((res) => res.json())
      .then((res) => setimage3(res.results));
   
  }; 

    
  const [ishovering, setishovering] = useState(true)
  const display_search_demo = () => {
    return <>

    </>
  }
  

  return (
    <>
      <div className="top">
        <div className="top_data">
          <h1>Unsplash</h1>
          <p>The internet’s source of freely-usable images. </p>
          <p> Powered by creators everywhere.</p>

          <div className="search_box">
            <input
              type="text"
              placeholder="Search free high-resolution photos"
              onClick={() => {
                setishovering(true);
              }}
            />
          </div>
          <i className={`    ${ishovering ? "" : "hidden"}`}>
            <div className="mousehover">
              <p>Trending Searches</p>
              <div className="trending_searches">
                <p>Wallpapers</p>
                <p>travel</p>
                <p>home</p>
                <p>stagelights</p>
                <p>yoga</p>
              </div>
              <p>Trending Topics</p>
              <div className="trending_topics">
                <p>Wallpapers</p>
                <p>Arts & Culture</p>
                <p>3D Renders</p>
                <p>Architecture</p>
                <p>Textures & Patterns</p>
              </div>
              <p>Trending Collections</p>
              <div className="trending_collections">
                <p>Light Tones</p>
                <p>Medium frames in interior</p>
                <p>Springs</p>
                <p>MockUps</p>
                <p>Flat Lay Lifestyle</p>
              </div>
            </div>
          </i>
        </div>
        <div className="banner">
          <img src={banner} alt="" />
        </div>
        <div className="bottom">
          <div className="first1">
            <p>Photo by Stephan Leonardi</p>
          </div>
          <div className="second2">
            <p>Read more about the Unsplash License</p>
          </div>
          <div className="third_3">
            <div className="third3">
              <img src={squarespace} alt="" />
            </div>
            <p>All you need to create a website</p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="App">
          {/* <div className="image_box"> */}
          {/* {images?.map((item) => (
              <div key={item.id} className="card">
                <div className="top2">
                  <p>+</p>
                </div>
                <img src={item.urls.regular} alt="" />
                <a href={item.links.download_location}> Download Image</a>
              </div>
            ))} */}
          {/* </div> */}
          <div className="image_box">
            <InfiniteScroll
              dataLength={images.length}
              next={FetchImages}
              hasMore={true}
              loader={<Loader />}
            >
              <>
                {images?.map((image) => (
                  <div key={image.id} className="card">
                    {/* <div className="top4">
                      <p>+</p>
                    </div> */}
                    <img src={image.urls.regular} alt="" />
                  </div>
                ))}
              </>
            </InfiniteScroll>
          </div>
          <div className="image_box">
            <InfiniteScroll
              dataLength={images.length}
              next={FetchImages}
              hasMore={true}
              loader={<Loader />}
            >
              <>
                {images2?.map((image) => (
                  <div key={image.id} className="card">
                    {/* <div className="top4">
                      <p>+</p>
                    </div> */}
                    <img src={image.urls.regular} alt="" />
                  </div>
                ))}
              </>
            </InfiniteScroll>
          </div>
          <div className="image_box">
            <InfiniteScroll
              dataLength={images.length}
              next={FetchImages}
              hasMore={true}
              loader={<Loader />}
            >
              <>
                {images3?.map((image) => (
                  <div key={image.id} className="card">
                    {/* <div className="top4">
                      <p>+</p>
                    </div> */}
                    <img src={image.urls.regular} alt="" />
                  </div>
                ))}
              </>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* // import { useState } from "react";

// import { Container, Grid,  Item, Button } from "semantic-ui-react";
// import "./App.css";

// function App() { */
}
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

// function App() {

//   return (
//     <div>
//       <Heading />
//       <InfiniteScroll
//         dataLength={images.length}
//         next={fetchImages}
//         hasMore={true}
//         loader={<Loader />}
//       >
//         <WrapperImages>
//           {images.map(image => (
//             <UnsplashImage url={image.urls.thumb} key={image.id} />
//           ))}
//         </WrapperImages>
//       </InfiniteScroll>
//     </div>
//   );
// }

// export default App;
