export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입
// 모든 타입 물음표
type aaa = Partial<IProfile>;

// 2. Required 타입
// 모든 물음표 삭제
type bbb = Required<IProfile>;

// 3. Pick 타입
// IProfile에서 name 또는 age만 '고르기'
type ccc = Pick<IProfile, 'name' | 'age'>;

// 4. Omit 타입
// IProfile에서 school만 '제외'
type ddd = Omit<IProfile, 'school'>;

// 5. Record 타입
type eee = '철수' | '영희' | '훈이'; // Union 타입 (합집합)
let child1: eee = '영희'; // 철수, 영희, 훈이만 됨
let child2: string = '사과'; // 철수, 영희, 훈이, 사과, 바나나 다 됨

type fff = Record<eee, IProfile>; // Record 타입 <키, 벨류>

// 6. 객체의 key들로 Union 타입 만들기
// IProfile에서 키들만 빼오는 것
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myprofile: ggg = 'hobby';

// 7. type vs interface 차이  => interface는 선언병합 가능. type은 안된다.
export interface IProfile {
  candy: number; // 선언병합으로 candy가 추가됨.
}

// 8. 배운거 응용
let profile: Partial<IProfile> = {
  candy: 10,
};
