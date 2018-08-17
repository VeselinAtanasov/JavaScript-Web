
export const ReportCalculator = {
    getCarValues : function(allExpenses) {
        let arr = ['initialInvestment', 'taxes', 'fuel', 'carRepair', 'consumables', 'accessories', 'cleaning', 'others']
        let result = [];
        for (let e of allExpenses) {
          result.push({
            id: e['carId'],
            value: e['initialInvestment'] + e['taxes'] + e['fuel'] + e['carRepair'] + e['consumables'] + e['accessories'] + e['cleaning'] + e['others']
          })
        }
        return result;
      },

      fillChartData: function(expense, modifiedLabels): Array<number> {
        let arr: Array<number> = [];
        for (let l of modifiedLabels) {
          if (expense.hasOwnProperty(l)) {
            arr.push(expense[l]);
          }
        }
        return arr;
      },
      fillPercentageChartData: function(expense, modifiedLabels) {
        let arr: Array<number> = [];
        for (let l of modifiedLabels) {
          if (expense.hasOwnProperty(l)) {
            arr.push(expense[l]);
          }
        }
        let sum = arr.reduce((a, b) => a + b);
        let result = arr.map(e => Number(((e / sum) * 100).toFixed(2)))
        return result;
      }
}