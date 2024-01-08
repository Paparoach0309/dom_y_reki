import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import {dataSliceActions} from "@/app/store/dataSlice";
import {useAppDispatch} from "@/app/store/hooks";

const allActionsApp = {
  ...dataSliceActions
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(allActionsApp, dispatch), []);
};
