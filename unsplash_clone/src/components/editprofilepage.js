import { Box, Flex ,Image, Spacer, VStack
,Text,Heading, Center, HStack
} from "@chakra-ui/react";

 import { Link,Outlet } from "react-router-dom";



 export default function Edi(){
     return (
        <>
        <Flex backgroundColor={''}>
         <Image w='55px' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"/>
         {/* <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"/> */}
       <Spacer></Spacer>
        <Image w= '55px'mr='20px' mt='10px' src='https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg' />
        </Flex>
        <Flex>
        <Box  ml='2%'textAlign={'left'} w='17%' mt='100px'   >
            <Heading fontSize={'20px'}>Account Settings</Heading>
           <Box m='10px'> <Link  to='./hiring' mt='50px'>Hiring</Link> </Box>
            <Box m='10px'> <Link to='./email'  as='u' mt='40px'>Email Setting</Link> </Box>
           <Box m='10px'> <Link to='./pass'  as='u' mt='40px'>Change  Password</Link> </Box>
           <Box m='10px'> <Link  to='./connect' as='u' mt='40px'>Conncet Accounts</Link> </Box>
           <Box m='10px'> <Link to='./app'  as='u' mt='40px'>Applictions</Link> </Box>
           <Box m='10px'> <Link  to='./close' as='u' mt='40px'>Close Account</Link> </Box>

        </Box>
        
            
<Box  ml='30px' mt='100px'>
    <Outlet></Outlet>
</Box>




        </Flex>



        
        </>
     )
 }