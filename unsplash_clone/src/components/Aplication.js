import { Flex, Heading,Text ,Spacer ,Box} from "@chakra-ui/react";

export default function Application(){
    return (
        <>
<Heading m='40px'>
    Application
</Heading>
<Text m='40px'>
These are apps you've connected that can access your Unsplash account.


</Text>

<Flex m='40px' fontWeight={700}>
    <Text>
    Application	
    </Text>
    <Spacer>

    </Spacer>
    <Text>
        Creat at
    </Text>
</Flex>
<Box ml='40px' backgroundColor={'grey'} p="10px" borderRadius={'10px'}>
No connected applications	

</Box>
        </>
    )
}



