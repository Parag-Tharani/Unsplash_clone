
import {
    Button, Box, Center, Image, Flex, Text
    , Heading,
    HStack,
    Input
    ,
    Link
    , Divider,
    VStack,
    Radio, RadioGroup, Spacer,Select
} from "@chakra-ui/react"
export default function Connect(){
    var No_item=2
    return (
        <>
        <Box>
<Heading>
Connect accounts

</Heading>
<Text w='80%' mt='30px'>
Verifying your account by connecting your Facebook or Twitter accounts increases the chances of your submissions being accepted and being promoted to the community.


</Text>
<Text fontSize={'10px'} mt='20px '>
We don’t post anything to your social accounts on your behalf, ever.


</Text>
 <Heading mt='40px' fontSize='25px'>
    Twitter
 </Heading>
 <Button colorScheme={'twitter'}>
Connect on Twitter
 </Button>


 <Heading mt='40px' fontSize='25px'>
    Facebook
 </Heading>
 <Button colorScheme={'twitter'}>
Facebook on Twitter
 </Button>
        </Box>
</>
    )
}