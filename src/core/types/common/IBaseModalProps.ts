export interface IBaseModalProps {
  onClose?: () => void;
  onSubmit?: (...data: any) => void;
  isVisible: boolean;
  closeBtnText?: string;
  submitBtnText?: string;
  title?: string;
  keyboardAvoid?: boolean;
  hideSubmitButton?: boolean;
  hideCancelButton?: boolean;
  modalKeyboardAvoid?: boolean;
}

export type TModal = {
  create: boolean;
  edit: boolean;
  createOrEdit: boolean;
  confirmRemove: boolean;
  favorite: boolean;
  filter: boolean;
  whyDialog: boolean;
  whyDeclaration: boolean;
};
