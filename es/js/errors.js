export const error = {
    errorMessage: '',
    getInstance() { return this }
};

export function ShowError() {
     if (this.error.errorMessage != '') {
         alert(this.error.errorMessage);
     }
 }