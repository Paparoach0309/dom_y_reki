import React from 'react';
import {Stack, Typography, useMediaQuery} from "@mui/material";
import theme from "@/app/theme/theme";

const ResultTitle = () => {
    const isMD = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                background: 'var(--1, linear-gradient(83deg, #460000 0%, #EB140A 100%))',
                color: 'white',
                flexDirection: 'row',
                width: {md: '483px', xs: '100%'},
                height: '112px'
            }}
        >
            <Typography
                style={{
                    fontSize: isMD ? '34px' : '22px',
                    fontFamily: 'A1Serif-Bold',
                    paddingRight: '15px'
                }}
            >
                Отправьте заявку
            </Typography>
        </Stack>
    );
};

export default ResultTitle;
