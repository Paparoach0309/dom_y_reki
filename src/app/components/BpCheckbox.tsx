'use client';
import React from 'react';
import {Checkbox, CheckboxProps} from '@mui/material';
import {BpCheckedIcon, BpIcon} from './styled/StyledCheckBox';

const BpCheckbox = (props: CheckboxProps) => {
    return (
        <Checkbox
            sx={{'&:hover': {bgcolor: 'transparent'}, p: 0}}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon/>}
            icon={<BpIcon/>}
            {...props}
        />
    );
};

export default BpCheckbox;
