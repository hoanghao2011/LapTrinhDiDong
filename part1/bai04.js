// du lieu 
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

// tinh toan
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

// in
console.log(`bill1 ${bill1}, tip ${tip1}, tong cong ${bill1+tip1}`);
console.log(`bill2 ${bill2}, tip ${tip2}, tong cong ${bill2+tip2}`);
console.log(`bill3 ${bill3}, tip ${tip3}, tong cong ${bill3+tip3}`);