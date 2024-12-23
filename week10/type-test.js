// 1️⃣ string
function getString() {
    var successCase = "Hello, TypeScript!"; // ✅ 성공 케이스
    const failureCase: string = 123; // ❌ 오류: 'number' 타입은 'string'에 할당할 수 없습니다.
    return successCase;
}
// 2️⃣ number
function getNumber() {
    var successCase = 42; // ✅ 성공 케이스
    // const failureCase: number = "42"; // ❌ 오류: 'string' 타입은 'number'에 할당할 수 없습니다.
    return successCase;
}
// 3️⃣ boolean
function getBoolean() {
    var successCase = true; // ✅ 성공 케이스
    // const failureCase: boolean = "true"; // ❌ 오류: 'string' 타입은 'boolean'에 할당할 수 없습니다.
    return successCase;
}
// 4️⃣ null
function getNull() {
    var successCase = null; // ✅ 성공 케이스
    // const failureCase: null = undefined; // ❌ 오류: 'undefined' 타입은 'null'에 할당할 수 없습니다.
    return successCase;
}
// 5️⃣ undefined
function getUndefined() {
    var successCase = undefined; // ✅ 성공 케이스
    // const failureCase: undefined = null; // ❌ 오류: 'null' 타입은 'undefined'에 할당할 수 없습니다.
    return successCase;
}
// 6️⃣ symbol
function getSymbol() {
    var successCase = Symbol('unique'); // ✅ 성공 케이스
    // const failureCase: symbol = "symbol"; // ❌ 오류: 'string' 타입은 'symbol'에 할당할 수 없습니다.
    return successCase;
}
// 7️⃣ bigint
function getBigInt() {
    var successCase = 9007199254740991n; // ✅ 성공 케이스
    // const failureCase: bigint = 42; // ❌ 오류: 'number' 타입은 'bigint'에 할당할 수 없습니다.
    return successCase;
}
// 8️⃣ object
function getObject() {
    var successCase = { name: "TypeScript" }; // ✅ 성공 케이스
    // const failureCase: object = "Not an object"; // ❌ 오류: 'string' 타입은 'object'에 할당할 수 없습니다.
    return successCase;
}

console.log("1️⃣ String:", getString());
console.log("2️⃣ Number:", getNumber());
console.log("3️⃣ Boolean:", getBoolean());
console.log("4️⃣ Null:", getNull());
console.log("5️⃣ Undefined:", getUndefined());
console.log("6️⃣ Symbol:", getSymbol());
console.log("7️⃣ BigInt:", getBigInt());
console.log("8️⃣ Object:", getObject());