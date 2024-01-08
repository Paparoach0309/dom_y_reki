'use client';
import React from 'react';
import {Container, Grid, Paper, Typography} from "@mui/material";
import CustomSlider from "@/app/components/slider/CustomSlider";

const CustomerReviewsData = () => {
    const isProd = process.env.NODE_ENV === 'production'
    return (
        <Paper
            id={'security_box'}
            sx={{
                height: 1,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none'
            }}
        >
            <Container maxWidth={'xl'}>
                <Grid
                    container
                    sx={{
                        alignContent: 'center',
                        alignItems: 'center',
                        mb: {xs: 3, md: '100px'},
                        px: {xs: 2, lg: 10},
                    }}
                >
                    <Grid item md={9} lg={9.5} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='sans-bold-40-24'>Что говорят наши клиенты</Typography>
                    </Grid>
                    <Grid item container md={3} lg={2.5}
                          sx={{justifyContent: 'flex-end', display: {xs: 'none', md: 'flex'}}}>
                        <Grid item id='customPrevArrow'></Grid>
                        <Grid item id='customNextArrow'></Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            my: {xs: 4, md: 7.5},
                            '& .slick-slide > div': {
                                margin: {sm: '0 6px', md: '0 12px'},
                            },
                            '& .slick-list': {
                                height: {md: '380px'},
                                padding: '0 10% 0 0 !important',
                                margin: {sm: '0 -6 px', md: '0 -12px'},
                            },
                            '& .slick-dots ': {
                                marginTop: 2,
                            },
                            '& .slick-dots li': {
                                margin: {xs: '0px 10px', md: '0px 20px'},
                            },
                            '& .slick-dots li button:before': {
                                opacity: '1',
                                backgroundColor: '#D9D9D9',
                                borderRadius: '3px',
                                width: {xs: '28.5', md: '38px'},
                                margin: {xs: '10px', md: '20px'},
                                height: '8px',
                                content: '""',
                            },
                            '& .slick-dots li.slick-active button:before': {
                                backgroundColor: 'red',
                            },
                        }}
                    >
                        <CustomSlider/>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default CustomerReviewsData;
