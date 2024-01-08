import { styled } from '@mui/material';

export const BpIcon = styled('span')({
  borderRadius: 3.7,
  width: '18px',
  height: '18px',
  backgroundColor: '#FFFFFF',
  border: '0.735775px solid #D7D7D7'
});

export const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'var(--light-primary-red, #FF372D)',
  '&:before': {
    display: 'block',
    width: '18px',
    height: '18px',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""'
  }
});
