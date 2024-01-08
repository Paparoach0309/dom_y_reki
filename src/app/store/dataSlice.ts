import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICalculatorOptionalData, IFlavors} from "@/app/types/calculatorTypes";
import {
  calculatorBackup,
  calculatorOptional,
  flavorsGeneral,
  flavorsIntensive,
  flavorsLarge
} from "@/app/constants/flavorsConst";

export interface IDataState {
  user: {
    nameCompany: string;
    telWork: string;
    emailWork: string;
    comment: string;
    isConsultation: boolean;
    isErrorForm: boolean;
    [key: string]: any;
  };
  tableData: {
    flavorsGeneral: IFlavors[];
    flavorsIntensive: IFlavors[];
    flavorsLarge: IFlavors[];
    [key: string]: any;
  };
  optionData: ICalculatorOptionalData[];
  backupData: ICalculatorOptionalData[];
  isOpenCall: boolean;
  isFormSend: boolean

  [key: string]: any;
}

const initialState: IDataState = {
  user: {
    nameCompany: '',
    telWork: '',
    emailWork: '',
    comment: '',
    isConsultation: true,
    isErrorForm: true
  },
  tableData: {
    flavorsGeneral,
    flavorsIntensive,
    flavorsLarge,
  },
  optionData: calculatorOptional,
  backupData: calculatorBackup,
  isOpenCall: false,
  isFormSend: false,
};

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    editTableData: (state, action) => {
      const _ = action.payload
      state.tableData[_.name][_.id] = _.value
    },
    editData: (state, action) => {
      const _ = action.payload
      state[_.name][_.id] = _.value
    },
    editCallForm: (state, action) => {
      const _ = action.payload
      state[_.name] = _.value
    },
    setFormSend: (state, action: PayloadAction<boolean>) => {
      state.isFormSend = action.payload
    },
    editUserData: (state, action) => {
      const _ = action.payload
      state.user[_.name] = _.value
    }
  }
});

export const dataSliceActions = dataSlice.actions;
export default dataSlice.reducer;
