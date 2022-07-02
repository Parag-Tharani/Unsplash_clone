 
 import { Button, Container, FormControl, FormLabel,
  
  Image,
  HStack, Input, VStack, Heading,Box,Text, Flex ,Spacer} from "@chakra-ui/react"
import { useState } from "react"
import { Outlet,NavLink, useNavigate } from "react-router-dom"
// import { MdEdit } from "react-icons/re";
import './App.css' 
export default function Home(){
  const [im,setim]=useState('')
  const [pic,spic]=useState(false)
  const red= useNavigate()
const Edit=()=>{
  red('./edit')

}




const pos=()=>{
const xy=new FormData()
xy.append('myfile',im,im.name)
xy.append('name',"sai")
console.log('im' ,im)

  fetch("http://localhost:3001/upload",{
    method:"POST",
    body:xy,
    headers:{
        'Content-Type': "multipart/form-data; boundary=MyBoundary"

    }
})
.then((x)=>x.json())
.then((x)=>console.log(x))
}

      return(
        <>

{/* <Button onClick={pos}> upload</Button> */}



<Flex backgroundColor={''}>
         <Image w='55px' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"/>
         {/* <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"/> */}
       <Spacer></Spacer>
        <Image w= '55px'mr='20px' mt='10px' src='https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg' />
        </Flex>
  <Flex  ml='25%' >
  <HStack >
    <Image borderRadius='50%'h='200px' w='200px' src={pic?URL.createObjectURL(im):'https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg'}/>
  </HStack>
  <VStack ml='20px'>
<HStack mt='5%'  width="100%"  ml='10px' >
  <Heading >Naseeb Khan</Heading>
  <Button onClick={Edit} >Edit Profile</Button>
</HStack>
<Box textAlign="left" >

  
<Text mt='5%' >Download free, beautiful high-quality photos curated by Naseeb.</Text>
<Text > Not available for hire</Text>

</Box>
  </VStack>
  </Flex>

<Flex mt={'10%'} borderBottom='2px'borderColor='black'>
<HStack  ml='2%'spacing={10}>
<NavLink to='/'>Photos</NavLink>
  <NavLink to='/likes'>Likes</NavLink>
  <NavLink to='/col'>Collection</NavLink>
  <NavLink to='/stats'>Stats</NavLink>
  </HStack>
  </Flex>

  <Outlet />




        {/* <Container>
      <FormControl>
      
      <HStack color="white" backgroundColor="lightblue"  p="5px"borderRadius="5px" m={10} border='1px' borderColor='grey'>
<FormLabel>Username</FormLabel>
<Input placeholder="Username"></Input>


        </HStack >
        <HStack  p='5px'm={10} border='1px' borderColor='grey'>
<FormLabel>Password</FormLabel>
<Input placeholder="Password"></Input>


        </HStack>
      <HStack align="center">
      <Button onClick={x.lhandler} size="lg" colorScheme='teal' variant='ghost'>
{x.login==true?"log out":"log In"}
</Button>
<Button border="1px" colorScheme='teal' variant='ghost' size='lg'>
Create Ac
</Button>
      </HStack>
   </FormControl>
   </Container>
    */}
</>
      )
 }

  
  