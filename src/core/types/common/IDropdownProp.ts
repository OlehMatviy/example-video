export interface IDropdownProp {
  label: string;
  value: string | number;
}

export interface IVocabulary {
  id: number | string;
  name: string;
  isDisabled?: boolean;
  type?: string;
}
