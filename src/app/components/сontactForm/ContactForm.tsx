"use client"

import React, {useEffect, useRef} from 'react';
import './сontactForm.css';
import {Box, Button, Grid, Stack, Typography} from '@mui/material';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Icon} from '@/app/components/Icon';
import {StyledTextField} from "@/app/components/styled/StyledTextField";
import {useAppSelector} from '@/app/store/hooks';
import {isOpenCall} from '@/app/store/selectors';
import {Values} from 'zod';

const validationSchema = yup.object({
    companyName: yup.string().required('Название компании обязательно'),
    name: yup.string().required('Имя обязательно'),
    phone: yup.string().test('phone', 'Введите корректный номер телефона', (value) => {
        if (!value) {
            return false;
        }
        const cleanedValue = value.replace('+', '');
        const cleanedAndTrimmedValue = cleanedValue.replace(/^375/, '');
        return /^\d{9}$/.test(cleanedAndTrimmedValue);
    }),
    email: yup.string().email('Введите корректный email').required('Email обязателен'),
    comment: yup.string(),
});

interface ContactFormProps {
    onSubmit: (values: Values<any>) => void;
    isClicked: boolean;
    handleClickCall: () => void;
    isMD?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({isClicked, onSubmit, handleClickCall}) => {
    const isOpenCall1 = useAppSelector(isOpenCall);
    const containerRef = useRef<HTMLDivElement | null>(null); // Указываем тип для containerRef

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                handleClickCall();
            }
        };
        if (isClicked) {
            document.addEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isClicked, handleClickCall]);

    const formik = useFormik({
        initialValues: {
            companyName: '',
            name: '',
            phone: '375',
            email: '',
            comment: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, {setSubmitting}) => {
            setSubmitting(true);
            onSubmit(values);
            setSubmitting(false);
        },
    });


    return (
        <>

            {isClicked && (
                <>
                    <div className={`overlay ${isOpenCall1 ? 'active' : ''}`}></div>
                    <Stack
                        width={{sm: '500px', xs: '100%' }}
                        ref={containerRef}

                        className={`contact-form-container ${isClicked ? 'active' : ''}`}>
                        <Box
                        >
                            <Stack
                                mt={2}
                                mb={2}
                                mr={2}
                                ml={2}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mr: '25px',
                                }}>
                                    <Typography
                                        sx={{
                                            ml: '20px',
                                        }}
                                        variant={'h4'}>Запросить консультацию</Typography>
                                    <span
                                        onClick={handleClickCall}
                                        className={'close-icon'}
                                    >
                                    <Icon icon={'cancel-circle'} color={'#EB4A3B'} size={24}/>
                                 </span>


                                </Box>
                                <Stack>
                                    Оставьте контактные данные, и если ваш вопрос связан с услугами дата-центра,
                                    мы обязательно свяжемся с вами.
                                </Stack>
                            </Stack>
                            <Box sx={{p: 2}}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid
                                        container spacing={2}>
                                        <Grid item xs={12}>
                                            <StyledTextField
                                                fullWidth
                                                id="companyName"
                                                name="companyName"
                                                label="Название компании"
                                                value={formik.values.companyName}
                                                onChange={formik.handleChange}
                                                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                                                helperText={formik.touched.companyName && formik.errors.companyName}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField
                                                fullWidth
                                                id="name"
                                                name="name"
                                                label="Как к вам обращаться"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                helperText={formik.touched.name && formik.errors.name}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <StyledTextField
                                                fullWidth
                                                id="phone"
                                                name="phone"
                                                label="Номер телефона с кодом оператора"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                helperText={formik.touched.phone && formik.errors.phone}
                                            />
                                        </Grid>


                                        <Grid item xs={12}>
                                            <StyledTextField
                                                fullWidth
                                                id="email"
                                                name="email"
                                                label="Email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <StyledTextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                id="comment"
                                                name="comment"
                                                label="Комментарий"
                                                value={formik.values.comment}
                                                onChange={formik.handleChange}
                                                error={formik.touched.comment && Boolean(formik.errors.comment)}
                                                helperText={formik.touched.comment && formik.errors.comment}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button
                                                fullWidth
                                                sx={{
                                                    height: '60px',
                                                    width: '100%', color: '#fff', background: '#F00',
                                                    '&:hover': {
                                                        background: '#EB4A3B',
                                                    }
                                                }}
                                                type="submit" variant="contained" color="primary">
                                                <Typography sx={{ fontSize: '14px'}}>
                                                    Отправить
                                                </Typography>

                                            </Button>
                                        </Grid>
                                    </Grid>

                                </form>
                            </Box>
                        </Box>

                    </Stack>
                </>
            )}

        </>
    );
};

export default ContactForm;
