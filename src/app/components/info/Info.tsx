import React from 'react';
import {Container, Stack} from "@mui/material";
import AdvantagesMain from "@/app/components/info/advantages/AdvantagesMain";

function Info() {
    return (
        <Stack pt={{md: "200px", xs: "40px"}} sx={{background: '#FDFDFD'}}>
            <Container maxWidth={'lg'}>
                <AdvantagesMain/>
            </Container>
        </Stack>
    );
}

export default Info;