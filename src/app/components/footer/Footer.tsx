import React from 'react';
import {Box, Container, InputBase, Stack, Typography} from "@mui/material";
import {Icon} from "@/app/components/Icon";
import {footerData} from "@/app/constants/dataConst";
import Link from 'next/link';
import Script from "next/script";

const Footer = () => {
    return (
        <>
            <Box style={{borderBottom: '1px solid #EFEFEF'}}/>
            <Box py={'40px'} sx={{background: '#fff'}}>
                <Container maxWidth={'xl'}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Stack direction={{xs: 'column', sm: 'row'}} spacing={4}>
                            <Stack direction={'row'} spacing={4} useFlexGap flexWrap="wrap">
                                {footerData.map((i) => {
                                    return (
                                        <Typography key={i.id}
                                                    sx={{
                                                        '&:hover': {
                                                            cursor: 'pointer',
                                                            color: '#EB4A3B',
                                                        }
                                                    }}
                                                    style={{
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                        fontFamily: 'A1Sans-Bold',
                                                    }}>
                                            <Link
                                                rel="noopener noreferrer" target="_blank"
                                                href={i.url}>
                                                    {i.title}
                                            </Link>
                                        </Typography>
                                    )
                                })}
                            </Stack>
                        </Stack>
                        {/* <Script
                            strategy="beforeInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
        (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://crm.a1.by/upload/crm/site_button/loader_1_yrc39o.js');
  `,
                            }}
                        /> */}
                        <Typography style={{fontSize: '14px', paddingTop: '68px'}}>
                            © {new Date().getFullYear()} Общество с ограниченной ответственностью «А1 ИКТ сервисы». Все права защищены.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>

    );
};

export default Footer;
