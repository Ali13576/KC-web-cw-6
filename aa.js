
alert(" مرحبا بك في موقعي الذي سيحسب درجتك")

//prompt 
prompt("اكتب درجتك")
let gred = prompt("اكتب درجتك")

console.log(gred);

if (gred >= 90) {
    console.log("لقد حصلت على درجة امتياز");
} else if (gred >= 80) {
    console.log("لقد حصلت على درجة جيد جدا");
} else if (gred >=70) {
    console.log("لقد حصلت على درجة جيد");
} else if (gred >=60) {
    console.log("لقد حصلت على درجة مقبول");
}else if (gred >=50) {
    console.log("لقد حصلت على درجة ضعيف");
}else if (gred<=50 ) {
    console.log("راسب");
}


    
