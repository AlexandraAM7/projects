export interface PayloadData {
  value: number;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: PayloadData }[];
}
