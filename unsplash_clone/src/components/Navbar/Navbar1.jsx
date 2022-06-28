import React from "react";
import { Button, Box, InputBase } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { Link } from "react-router-dom"
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar1 = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        display:"flex",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.05),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(1),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        color: "#757575",
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('lg')]: {
            width: '510px',
          },
        },
      }));

      const Input = styled('input')({
        display: 'none',
      });

      const HandleSubmit = () => {
        console.log(document.getElementById("contained-button-file").files)
      }
      

    return (
        <Box sx={{display:"flex", padding:1, alignItems:"center", justifyContent:"center"}}>

            <img alt="Logo" style={{position:"relative",borderRadius:"50%"}} width={"55px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf31fI-8KqbQk8HKfgCdJTZ_ZpMe1bdtKArA&usqp=CAU" />

            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search free high-resolution photos"
            />
              <ImageSearchIcon className="onHover" sx={{position:"relative", display:"flex", alignItems:"center", padding:1}}/>
          </Search>

          <Link to='#' className="onHover">Advertise</Link>
          <Link to='#' className="onHover">Blog</Link>
          <Box sx={{color:"#7e7b7bd5", borderLeft:1, marginLeft:"10px", marginRight:"10px", borderColor:"#7e7b7bd5", height:30}}></Box>
          <Link to="#" className="onHover">Login</Link>
          <p style={{color:"#757575"}}>/</p>
          <Link to="#" className="onHover">Signup</Link>
          
        <label htmlFor="contained-button-file">
        <Input onInput={HandleSubmit} accept="image/*" id="contained-button-file" multiple type="file" />
        <Button className="onHover" variant="contained" component="span" size="small" color="inherit" sx={{color:"#757575",padding:1, border:1, borderColor:"#757575", backgroundColor:"white", fontSize:12, boxShadow:"none", marginLeft:"10px", marginRight:"10px"}}>
          Submit Photo
        </Button>
        </label>

        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          </Toolbar>

        </Box>
    )
}