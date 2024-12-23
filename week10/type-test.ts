// 1️⃣ string
function getString(): string {
  const successCase: string = "Hello, TypeScript!"; // ✅ 성공 케이스
  // const failureCase: string = 123; // ❌ 오류: 'number' 타입은 'string'에 할당할 수 없습니다.
  return successCase;
}

// 2️⃣ number
function getNumber(): number {
  const successCase: number = 42; // ✅ 성공 케이스
  // const failureCase: number = "42"; // ❌ 오류: 'string' 타입은 'number'에 할당할 수 없습니다.
  return successCase;
}

// 3️⃣ boolean
function getBoolean(): boolean {
  const successCase: boolean = true; // ✅ 성공 케이스
  // const failureCase: boolean = "true"; // ❌ 오류: 'string' 타입은 'boolean'에 할당할 수 없습니다.
  return successCase;
}

// 4️⃣ null
function getNull(): null {
  const successCase: null = null; // ✅ 성공 케이스
  // const failureCase: null = undefined; // ❌ 오류: 'undefined' 타입은 'null'에 할당할 수 없습니다.
  return successCase;
}

// 5️⃣ undefined
function getUndefined(): undefined {
  const successCase: undefined = undefined; // ✅ 성공 케이스
  // const failureCase: undefined = null; // ❌ 오류: 'null' 타입은 'undefined'에 할당할 수 없습니다.
  return successCase;
}

// 6️⃣ symbol
function getSymbol(): symbol {
  const successCase: symbol = Symbol('unique'); // ✅ 성공 케이스
  // const failureCase: symbol = "symbol"; // ❌ 오류: 'string' 타입은 'symbol'에 할당할 수 없습니다.
  return successCase;
}

// 7️⃣ bigint
function getBigInt(): bigint {
  const successCase: bigint = 9007199254740991n; // ✅ 성공 케이스
  // const failureCase: bigint = 42; // ❌ 오류: 'number' 타입은 'bigint'에 할당할 수 없습니다.
  return successCase;
}

// 8️⃣ object
function getObject(): object {
  const successCase: object = { name: "TypeScript" }; // ✅ 성공 케이스
  // const failureCase: object = "Not an object"; // ❌ 오류: 'string' 타입은 'object'에 할당할 수 없습니다.
  return successCase;
}
