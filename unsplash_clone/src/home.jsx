// import React from "react";
import "./App.css";
import banner from "./banner.png";
import heart from "./heart-black.svg";
import squarespace from "./squarespace.svg";
import React, { useState, useEffect } from "react";
import { Loader } from "./components/Loader";
import Search from "./components/search";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import search from "./components/search";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
var index = 1;
function App() {
  const [images, setImage] = useState([]);
  // const [search, setsearch] = useState([]);

  const [images2, setimage2] = React.useState([]);
  const [images3, setimage3] = React.useState([]);
  const [query, setquery] = React.useState(["office"]);
  // const [index, setindex] = React.useState([1]);

  useEffect(() => {
    // if (images.length != 0) {
      
    // }
   FetchImages()
    // alert("shown")
  }, [setquery]);

  const FetchImages = (count = 10) => {
    
    // const apiRoot = "https://api.unsplash.com";
    // const accessKey = process.env.REACT_APP_ACCESSKEY;
    // console.log(index);
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${index}&per_page=10&query=${query}&client_id=d-LkQ147e_thL57BcZo3md05pDVFELieWfQ3GFKX6go&count=${count}`
      )
      .then((res) => {
        console.log(res.data);
        setImage([...images, ...res.data.results]);
      });
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${
          index + 1
        }&per_page=10&query=${query}&client_id=d-LkQ147e_thL57BcZo3md05pDVFELieWfQ3GFKX6go&count=${count}`
      )
      .then((res) => {
        console.log(res.data);
        setimage2([...images2, ...res.data.results]);
      });
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${
          index + 2
        }&per_page=10&query=${query}&client_id=d-LkQ147e_thL57BcZo3md05pDVFELieWfQ3GFKX6go&count=${count}`
      )
      .then((res) => {
        console.log(res.data);
        setimage3([...images3, ...res.data.results]);
      });
    index += 3;
  };

  const [ishovering, setishovering] = useState(-1);
  const [searchhovering, setsearchhovering] = useState(false);
  const Datashow = styled.div`
    // : gry;
    :hover {
      // background-color: grey;
    }
  `;
   function handleKeyDown(e) {
    if (e.key === 'Enter') {
      console.log(e.target.value);
      setquery([`${e.target.value}`]);
       
      handlesearchleave();
    }
  }

  function handlesearchleave(e) {
    // console.log(e);
    setsearchhovering(false);
  }
  function handlesearchhovering(e) {
    // console.log(e);
    setsearchhovering(true);
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
              onClick={handlesearchhovering}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div>
            <div
              className={` data   ${searchhovering ? "" : "hidden"}`}
              // onMouseLeave={handlesearchleave}
            >
              <div className="mousehover">
                <p>Trending Searches</p>
                <div className="trending_searches">
                  {/* <Link to="/search"> wallpapers </Link> */}
                  <p
                    onClick={() => {
                      setquery(["wallpapers"]);
                      handlesearchleave();
                    }}
                  >
                    wallpapers
                  </p>
                  <p
                    onClick={() => {
                      setquery(["travel"]);
                      handlesearchleave();
                    }}
                  >
                    travel
                  </p>
                  <p
                    onClick={() => {
                      setquery(["home"]);
                      handlesearchleave();
                    }}
                  >
                    home
                  </p>
                  <p
                    onClick={() => {
                      setquery(["stage lights"]);
                      handlesearchleave();
                    }}
                  >
                    stagelights
                  </p>
                  <p
                    onClick={() => {
                      setquery(["yoga"]);
                      handlesearchleave();
                    }}
                  >
                    yoga
                  </p>
                </div>
                <p>Trending Topics</p>
                <div className="trending_topics">
                  <p
                    onClick={() => {
                      setquery(["Wallpapers"]);
                      handlesearchleave();
                    }}
                  >
                    Wallpapers
                  </p>
                  <p
                    onClick={() => {
                      setquery(["Arts & Culture"]);
                      handlesearchleave();
                    }}
                  >
                    Arts & Culture
                  </p>
                  <p
                    onClick={() => {
                      setquery(["3D Renders"]);
                      handlesearchleave();
                    }}
                  >
                    3D Renders
                  </p>
                  <p
                    onClick={() => {
                      setquery(["Architecture"]);
                      handlesearchleave();
                    }}
                  >
                    Architecture
                  </p>
                  <p
                    onClick={() => {
                      setquery(["Textures & Patterns"]);
                      handlesearchleave();
                    }}
                  >
                    Textures & Patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={banner} alt="" onClick={handlesearchleave} />
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
        <InfiniteScroll
          className="App"
          dataLength={images.length}
          next={FetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <div className="image_box">
            <div>
              <div>
                {images?.map((image) => (
                  <div className="card">
                    <div
                      key={image.id}
                      className="image_main_div"
                      onMouseEnter={() => setishovering(image.id)}
                      onMouseLeave={() => setishovering(-1)}
                    >
                      <div className="imagehover">
                        <div className="top4">
                          <div className="kelbm">
                            <div
                              className={`ppjpj ${
                                ishovering == image.id ? "backgr" : "hidden"
                              } `}
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
                                  <a
                                    href={`${image.links.download}&force=true`}
                                    download
                                    target="_blank"
                                  >
                                    <div className="svgjss4">
                                      <svg
                                        width="32"
                                        height="32"
                                        className="c_c7b"
                                        viewBox="0 0 32 32"
                                        version="1.1"
                                        aria-hidden="false"
                                      >
                                        <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                      </svg>
                                    </div>
                                  </a>
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
            </div>
          </div>
          <div className="image_box">
            <div>
              <div>
                {images2?.map((image) => (
                  <div className="card">
                    <div
                      key={image.id}
                      className="image_main_div"
                      onMouseEnter={() => setishovering(image.id)}
                      onMouseLeave={() => setishovering(-1)}
                    >
                      <div className="imagehover">
                        <div className="top4">
                          <div className="kelbm">
                            <div
                              className={`ppjpj ${
                                ishovering == image.id ? "" : "hidden"
                              } `}
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
                                  <a
                                    href={`${image.links.download}&force=true`}
                                    download
                                    target="_blank"
                                  >
                                    <div className="svgjss4">
                                      <svg
                                        width="32"
                                        height="32"
                                        className="c_c7b"
                                        viewBox="0 0 32 32"
                                        version="1.1"
                                        aria-hidden="false"
                                      >
                                        <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                      </svg>
                                    </div>
                                  </a>
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
            </div>
          </div>
          <div className="image_box">
            <div>
              <div>
                {images3?.map((image) => (
                  <div className="card">
                    <div
                      key={image.id}
                      className="image_main_div"
                      onMouseEnter={() => setishovering(image.id)}
                      onMouseLeave={() => setishovering(-1)}
                    >
                      <div className="imagehover">
                        <div className="top4">
                          <div className="kelbm">
                            <div
                              className={`ppjpj ${
                                ishovering == image.id ? "" : "hidden"
                              } `}
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
                                  <a
                                    href={`${image.links.download}&force=true`}
                                    download
                                    target="_blank"
                                  >
                                    <div className="svgjss4">
                                      <svg
                                        width="32"
                                        height="32"
                                        className="c_c7b"
                                        viewBox="0 0 32 32"
                                        version="1.1"
                                        aria-hidden="false"
                                      >
                                        <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                      </svg>
                                    </div>
                                  </a>
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
            </div>
          </div>
        </InfiniteScroll>
      </div>
      {/* <Routes>
        <Route path="/search" element={<Search />}></Route>
      </Routes> */}
    </>
  );
}

export default App;


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
