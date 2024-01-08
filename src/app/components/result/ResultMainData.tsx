'use client';
import React from 'react';
import {Container, Paper, Stack} from "@mui/material";
import ResultTitle from "@/app/components/result/ResultTitle";
import ResultBody from "@/app/components/result/ResultBody";

const ResultMainData = () => {
    const isProd = process.env.NODE_ENV === 'production'
    return (
        <Paper
            id={'result-form'}
            sx={{
                borderRadius: 0,
                backgroundImage: `url(${isProd ? '/dom_y_reki' : ''}/img/result.png)`,
                height: 1,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none'
            }}
        >
            <Container maxWidth={'xl'}>
                <Stack py={{lg: '100px', xs: '50px'}}>
                    <ResultTitle />
                    <ResultBody />
                </Stack>
            </Container>
        </Paper>
    );
};

export default ResultMainData;
