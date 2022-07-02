import { Box, Checkbox, Heading, Input ,Text

,HStack,
Spacer,
Button,
VStack

} from "@chakra-ui/react";

export default function Hiring(){
    return <>
    <Box>
<Heading>Interested in freelance photography work?
</Heading>

<Box  backgroundColor={'blue.100'} p='1.5%' borderRadius={'5px'} >
    <HStack>
        <Checkbox></Checkbox>
        <Text>
        Yes, feature my Unsplash profile on hiring pages and display a 'Hire' button

        </Text>
        <Spacer></Spacer>
        <Button colorScheme={'blue'}>Hire</Button>
    </HStack>

</Box>
<Text>Requests will be sent to your email

</Text>


<Box mt='30px'>
    <Text>What kind of photography work are you interested in? (select all that apply)
</Text>
<HStack  border={'1px'} borderColor={"blackAlpha.100"} p='3%'>
    
        <Box spacing ={2}>
       <Box> <Checkbox>Wedding</Checkbox></Box>
       <Box> <Checkbox>Portrait</Checkbox></Box>
        <Box><Checkbox>Newborn</Checkbox></Box>
       <Box> <Checkbox>Food</Checkbox></Box>
   
        </Box>
    
<Box >
<Box><Checkbox>Product</Checkbox></Box>
<Box><Checkbox>LifeStyle</Checkbox></Box>
<Box><Checkbox>Travel</Checkbox></Box>
<Box><Checkbox>Marketing & Social Media</Checkbox></Box>
</Box>
<Box>
  <Box>  <Checkbox>Event</Checkbox></Box>
<Box><Checkbox> Real Estate</Checkbox></Box>
   <Box> <Checkbox> Fashion</Checkbox></Box>
   <Box> <Checkbox>Food</Checkbox></Box>
   </Box> 
</HStack>
<Text fontSize={'10px'}>Your profile will be featured in hiring requests for the interests you've selected
</Text>
</Box>

    </Box>
    <Box  mt='40px'>
        <Text>
            In Which cities are you available to Shoot ?
        </Text>
<HStack p='3%'  border={'1px'} borderColor={"blackAlpha.100"}>

<Box w='33%'>
<Box ><Checkbox>
    New York
    </Checkbox></Box>

    <Box ><Checkbox>
    Los Angeles
    </Checkbox></Box>
    <Box ><Checkbox>
    Chicago
    </Checkbox></Box>


</Box>


<Box >
<Box >
    <Checkbox>
    San Francisco
    </Checkbox></Box>

    <Box ><Checkbox>
    Boston
    </Checkbox></Box>
    <Box ><Checkbox>
Toronto
    </Checkbox></Box>


</Box>

<Box >
<Box >
    <Checkbox>
    Montreal
    </Checkbox></Box>

    <Box ><Checkbox>
Vancouver
    </Checkbox></Box>
    <Box ><Checkbox>
London
    </Checkbox></Box>


</Box>






</HStack>
<Text fontSize={'10px'}>Hiring opportunities are limited to these cities for the moment. Request your city</Text>
    </Box>
    
    
    </>
}
