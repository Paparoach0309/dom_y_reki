import {TableCell, tableCellClasses, TableCellProps, TableRow} from '@mui/material';
import {styled} from '@mui/material/styles';

export const StyledTableRow = styled(TableRow)({
    '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: '#D9D9D9',
        '& > .MuiTableCell-root': {
            color: 'black'
        }
    }
});

export const StyledTableCell = styled((props: TableCellProps) => <TableCell {...props} />)({
    padding: 0,
    paddingRight: '5px',
    paddingLeft: '5px',
    alignItems: 'center',
    [`&.${tableCellClasses.head}`]: {
        height: '74px',
        borderBottom: 'none',
        textAlign: 'center',
        fontSize: '16px',
        fontFamily: 'A1Sans-Bold',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingRight: '4px',
        fontWeight: 'bold',
        backgroundColor: '#F7F7F7',
        color: '#000'
    },
    [`&.${tableCellClasses.body}`]: {
        leadingTrim: 'both',
        textEdge: 'cap',
        fontFamily: 'A1 Sans',
        fontSize: '16px',
        textAlign: 'center',
        alignSelf: 'stretch',
        borderBottom: '0.5px solid #EFEFEF',
        paddingBottom: '15px',
        paddingTop: '15px'
    }
});
