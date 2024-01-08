import {TextField, TextFieldProps} from "@mui/material";
import {styled} from "@mui/material/styles";

export const StyledTextField = styled((props: TextFieldProps) => (
    <TextField {...props} size={'small'} variant='outlined' />
))({
    width: '100%',
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            border: '0.5px solid #050505'
        }
    }
});