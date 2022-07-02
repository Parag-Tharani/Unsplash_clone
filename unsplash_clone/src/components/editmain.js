import { useState } from "react" 

import {Input, Flex ,Box,Text ,Image, Heading, TagLabel, FormLabel, HStack, Spacer, Button} from "@chakra-ui/react"
export default function MainEdit(){
    const [dis,sdis]=useState("block")
    const [pic,spic]=useState(false)
    const [state,setstate]=useState({
        "firstname":'',
        "lastname":'',
        'email':'',
        'username':'',
        'loction':'',
        'personalsite':'',
        'bio':'',
        'intrests':'',
        'insta':'',
        'twiter':'',
        'payPal':''
    })
    const [im,setim]=useState('')
    // const [im,setim]=useState('')
    // const [im,setim]=useState('')
    // const [im,setim]=useState('')
    // const [im,setim]=useState('')
    // const [im,setim]=useState('')
    
    
const Changepic=()=>{
    
    const sai=dis=='block'?"none":"block"
    sdis(sai)
    
}

const handleChange = e => {
    const {name, value} = e.target
    setstate( { ...state, [name]: value} )
    console.log(state)
  }
    
    return (
        <>
        < Flex >
            <Box  w={'72'} >
<Text fontWeight={800} >
    Edit Profile
</Text>
<Box ml='30%' mt='10%' w={'48'}>
    
<Image  w='150px' src={pic===true?URL.createObjectURL(im):'https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg'} />
<Box display={dis}>
    <Input
    type={'file'}
onChange={(e)=>{
    spic(true)
    setim(e.target.files[0])
    sdis('none')
    
}}    
    
    
    ></Input>
    
    
    </Box>

           <Text  onClick={Changepic} color={'blue'} as={'Button'}>Edit Profile Picture</Text> </Box>
<Text>
    Badge
</Text>
<Text mt='20px'>{'You don t have any badges yet :('}</Text>
           </Box>

<Box>
{/* <Box backgroundColor={'green.400'} alignSelf={'end'}>
    <Text> Acoount confirmed</Text>
</Box> */}
{/* input */}
<HStack >
<Box  ml='5%'>
<FormLabel>First Name</FormLabel>
<Input name="firstname"  value={state.firstname} onChange={handleChange}></Input>
</Box>
<Box>
<FormLabel>Last Name</FormLabel>
<Input
name="lastname"  value={state.lastname} onChange={handleChange}
></Input>
</Box>

</HStack>
<Box ml='5%'>
    <FormLabel>Email </FormLabel>
    <Input
    name="email"  value={state.email} onChange={handleChange}
    ></Input>
</Box>

<Box ml='5%'>
    <FormLabel>Username 
    </FormLabel><Text>
    (only letters, numbers, and underscores)</Text>
    <Input
    name="username"  value={state.username} onChange={handleChange}
    ></Input>
    <Text>user_naem</Text>
</Box>


</Box>


        </Flex>
        <Box w='100%'>
<Heading>About</Heading>
<HStack >
    <Box>
    <FormLabel>
        Loction
    </FormLabel>
    <Input  w='400px'
    name="loction"  value={state.loction} onChange={handleChange}
    ></Input>
    </Box>
    <Box>
    <FormLabel>
    Personal site/portfolio

    </FormLabel>
    <Input w='400px'
    name="personalsite"  value={state.personalsite} onChange={handleChange}
    ></Input>
    </Box>
</HStack>

<HStack>
    <Box>
    <FormLabel>
        Bio
    </FormLabel>
    <Input  w='400px'
    name="bio"  value={state.bio} onChange={handleChange}
    ></Input>
    </Box>
    <Box>
    <FormLabel>
    Intrests

    </FormLabel>
    <Input w='400px'
    name="intrests"  value={state.intrests} onChange={handleChange}
    ></Input>
    </Box>
</HStack>
<Heading>Social</Heading>

<HStack>
    <Box>
    <FormLabel>
        Instagram
    </FormLabel>
    <Input
w='400px'
name="insta"  value={state.insta} onChange={handleChange}
    ></Input>
    </Box>
    <Box>
    <FormLabel>
    Twiter

    </FormLabel>
    <Input
w='400px'     name="twiter"  value={state.twiter} onChange={handleChange}
    ></Input>
    </Box>
</HStack>
<Heading>Dontion</Heading>
<Text>Pay pal</Text>
<Input
name="payPal"  value={state.payPal} onChange={handleChange}
></Input>
<Heading>Messaging</Heading>
<HStack>
    <input type='checkbox'></input>
    <Text>Display a 'Message' button on your profile</Text>
    <Spacer></Spacer>
    <Image w='40px' src='https://cdn.iconscout.com/icon/free/png-256/email-mail-verify-verified-inbox-true-right-2-18076.png'></Image>
</HStack>
<Button w='80%'>Updata </Button>
</Box>
        </>
     )
}