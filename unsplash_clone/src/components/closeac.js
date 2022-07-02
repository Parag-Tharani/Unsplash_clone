import { Box, FormLabel, Heading,Text,Input, Button } from "@chakra-ui/react";

export default function Close_ac(){
    return (
        <>
<Box>

        <Heading>
            Close
        </Heading>
<Text color={'red'}>
    Warning:closing your account is irreversible. It deletes all of your photos, collections, and stats.


</Text>
<FormLabel>
    Current Password
</FormLabel>
<Input>
</Input>


<Button  mt='40px'colorScheme={'red'}>Delete Account</Button>

</Box>


        </>
    )
}
