
import toastr from 'toastr';

toastr.options.newestOnTop = false;
toastr.options.closeButton = true;

function calculateRemainingAmount(tracker,expenses){

    let incomes = Number(tracker['walletIncomes'])+Number(tracker['walletOthers']);
    let outcomes = Number(expenses['foodExpense'])+
	Number(expenses['billsExpense'])+
	Number(expenses['medicineExpense'])+
	Number(expenses['transportExpense'])+
	Number(expenses['clothingExpense'])+
	Number(expenses['funExpense'])+
    Number(expenses['otherExpense']);
    
    return incomes-outcomes;

}

function notify(type, message, errors) {
    if (type === 'success') {
        toastr.success(message);
    }

    if (type === 'error') {
        toastr.error(message);

        if (errors) {
            for (let err in errors) {
                toastr.error(errors[err]);
            }
        }
    }
}

export default {
    notify,
    calculateRemainingAmount
};