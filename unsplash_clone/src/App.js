// import React from "react";
import "./App.css";
import banner from "./banner.png";
import heart from "./heart-black.svg";
import squarespace from "./squarespace.svg";
import React, { useState, useEffect } from "react";
import { Loader } from "./components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import search from "./components/search";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
var index = 1;
function App() {
  const [images, setImage] = useState([]);
  const [search, setsearch] = useState([]);

  const [images2, setimage2] = React.useState([]);
  const [images3, setimage3] = React.useState([]);
  // const [index, setindex] = React.useState([1]);

  useEffect(() => {
    FetchImages();
  }, []);

  const FetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    console.log(index);
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${index}&per_page=10&query=office&client_id=rCgXNxiP3rG7_bJ_k4zxiVa0PISE5bJlC7JAt0uJRts&count=${count}`
      )
      .then((res) => {
        console.log(res.data);
        setImage([...images, ...res.data.results]);
      });
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${
          index + 1
        }&per_page=10&query=office&client_id=rCgXNxiP3rG7_bJ_k4zxiVa0PISE5bJlC7JAt0uJRts&count=${count}`
      )
      .then((res) => {
        console.log(res.data);
        setimage2([...images2, ...res.data.results]);
      });
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${
          index + 2
        }&per_page=10&query=office&client_id=rCgXNxiP3rG7_bJ_k4zxiVa0PISE5bJlC7JAt0uJRts&count=${count}`
      )
      .then((res) => {
        console.log(res.data);
        setimage3([...images3, ...res.data.results]);
      });
    index += 3;
  };

  const [ishovering, setishovering] = useState(false);
  const display_search_demo = () => {
    return <></>;
  };
  function handlemouseenter(e) {
    console.log(e);
    setishovering(true)
  }
  function handlemouseleave(e) {
    console.log(e);
    setishovering(false)
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
              <div>
                {images?.map((image) => (
                  <div key={image.id} className="card">
                    <div key={image.id}
                      className="image_main_div"
                      onMouseEnter={() => {
                        handlemouseenter()
                      }}
                      onMouseLeave={handlemouseleave}
                    >
                      <div className="imagehover">
                        <div className="top4">
                          <div className="kelbm">
                            <div
                              className={`ppjpj ${ishovering ? "" : "hidden"} `}
                            >
                              <div className="top6">
                                <div className="left_img">
                                  <p></p>
                                </div>
                                <div className="right_img">
                                  <img src={heart} alt="" />

                                  <p>+</p>
                                </div>
                              </div>
                              <div className="bottom4 ">
                                <div className="left-bottom4">
                                  <span className="span2">
                                    <div className="bottom4_img">
                                      <span className="span_jss1">
                                        <img
                                          src={image.user.profile_image.small}
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <p>{image.user.name}</p>
                                  </span>
                                </div>
                                <div className="right_bottom4">
                                  <div className="svgjss4">
                                    <svg
                                      width="32"
                                      height="32"
                                      class="c_c7b"
                                      viewBox="0 0 32 32"
                                      version="1.1"
                                      aria-hidden="false"
                                    >
                                      <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="img">
                        <img src={image.urls.regular} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
          <div className="image_box">
            <InfiniteScroll
              dataLength={images.length}
              next={FetchImages}
              hasMore={true}
              loader={<Loader />}
            >
              <div>
                {images?.map((image) => (
                  <div key={image.id} className="card">
                    <div
                      className="image_main_div"
                      onMouseEnter={handlemouseenter}
                      onMouseLeave={handlemouseleave}
                    >
                      <div className="imagehover">
                        <div className="top4">
                          <div className="kelbm">
                            <div
                              className={`ppjpj ${ishovering ? "" : "hidden"} `}
                            >
                              <div className="top6">
                                <div className="left_img">
                                  <p></p>
                                </div>
                                <div className="right_img">
                                  <img src={heart} alt="" />

                                  <p>+</p>
                                </div>
                              </div>
                              <div className="bottom4 ">
                                <div className="left-bottom4">
                                  <span className="span2">
                                    <div className="bottom4_img">
                                      <span className="span_jss1">
                                        <img
                                          src={image.user.profile_image.small}
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <p>{image.user.name}</p>
                                  </span>
                                </div>
                                <div className="right_bottom4">
                                  <div className="svgjss4">
                                    <svg
                                      width="32"
                                      height="32"
                                      class="c_c7b"
                                      viewBox="0 0 32 32"
                                      version="1.1"
                                      aria-hidden="false"
                                    >
                                      <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="img">
                        <img src={image.urls.regular} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
          <div className="image_box">
            <InfiniteScroll
              dataLength={images.length}
              next={FetchImages}
              hasMore={true}
              loader={<Loader />}
            >
              <div>
                {images3?.map((image) => (
                  <div key={image.id} className="card">
                    <div className="image_main_div">
                      <div className="imagehover">
                        <div className="top4">
                          <div className="kelbm">
                            <div className="ppjpj">
                              <div className="top6">
                                <div className="left_img">
                                  <p></p>
                                </div>
                                <div className="right_img">
                                  <img src={heart} alt="" />

                                  <p>+</p>
                                </div>
                              </div>
                              <div className="bottom4 ">
                                <div className="left-bottom4">
                                  <span className="span2">
                                    <div className="bottom4_img">
                                      <span className="span_jss1">
                                        <img
                                          src={image.user.profile_image.small}
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <p>{image.user.name}</p>
                                  </span>
                                </div>
                                <div className="right_bottom4">
                                  <div className="svgjss4">
                                    <svg
                                      width="32"
                                      height="32"
                                      class="c_c7b"
                                      viewBox="0 0 32 32"
                                      version="1.1"
                                      aria-hidden="false"
                                    >
                                      <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="img">
                        <img src={image.urls.regular} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
