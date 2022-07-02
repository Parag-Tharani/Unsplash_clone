import { Button, FormLabel, Heading, Input } from "@chakra-ui/react";

 export default function Pass(){
    return (
      <>
      <Heading>
      Change password

      </Heading>
<FormLabel> Password
   </FormLabel>  
   <Input w='150%'>
   </Input>   

   <FormLabel mt='40px'>Password
   </FormLabel>  
   <Input w='150%'>
   </Input>   



   <FormLabel mt='40px'>Current Canfirmation
   </FormLabel>  
   <Input w='150%'>
   </Input>    


<Button mt='30px' w='150%'>Update</Button>


      </>


    )
 }