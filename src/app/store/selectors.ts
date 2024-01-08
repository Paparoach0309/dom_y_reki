import {RootState} from "@/app/store/store";

export const selectBackupData = (state: RootState) => state.dataSlice.backupData;

export const selectOptionData = (state: RootState) => state.dataSlice.optionData;

export const selectTableData = (state: RootState) => state.dataSlice.tableData;

export const isOpenCall = (state: RootState) => state.dataSlice.isOpenCall;

export const isFormSend = (state: RootState) => state.dataSlice.isFormSend;

export const selectCountResult = (state: RootState) => state.dataSlice.optionData.filter((i) => i.isChoose).length +
    state.dataSlice.backupData.filter((i) => i.isChoose).length +
    state.dataSlice.tableData.flavorsGeneral.filter((i) => i.isChoose).length +
    state.dataSlice.tableData.flavorsLarge.filter((i) => i.isChoose).length +
    state.dataSlice.tableData.flavorsIntensive.filter((i) => i.isChoose).length;

export const selectUserData = (state: RootState) => state.dataSlice.user;
