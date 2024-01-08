const MuiButton = () => {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    letterSpacing: 0,
                },
            },
            variants: [
                {
                    props: {variant: 'not-fill'},
                    style: {
                        border: '1.5px solid #FC1C23',
                        height: '40px',
                        '&:hover': {
                            background: '#fff'
                        },
                    },
                },
            ]
        }
    }
}

export default MuiButton;
