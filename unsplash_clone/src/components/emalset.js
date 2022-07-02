import { Box, Button, Checkbox, Heading ,Text} from "@chakra-ui/react";

export default function Edit_email(){
    return (
        <>
        <Heading>
        Email Settings

        </Heading>
        <Text>
        Send me emails related to:


        </Text>
        <Box>

<Box m='5%'> <Checkbox>Announcements</Checkbox></Box>
<Box m='5%'> <Checkbox> Community Updates
</Checkbox></Box>
<Box m='5%'> <Checkbox>Curated Collections
 </Checkbox></Box>
<Box m='5%'> <Checkbox>Events Near Me
</Checkbox></Box>
<Box m='5%'> <Checkbox>Feedback & Surveys
 </Checkbox></Box>
<Box m='5%'> <Checkbox>Milestones and Notifications
 </Checkbox></Box>
<Box m='5%'> <Checkbox>Recommended Photos
 </Checkbox></Box>

        </Box>
        <Button w='100%'>
            Update
        </Button>
        </>
    )
}
