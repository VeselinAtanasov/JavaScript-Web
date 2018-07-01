

export default function (errors){

    let result=[];
    for(let err in errors){
        result.push(errors[err]);
        break;
    }
    return result[0];
}