export default function TypescriptPage() {
  // 타입추론 -> 처음 들어간 값으로 타입이 지정된다.
  let aaa = '안녕하세요';
  aaa = 3;

  // 타입명시
  let bbb: string = '반갑습니다.';
  bbb = 10;

  // 타입명시가 필요한 상황
  let ccc: number | string = 1000; 
  ccc = '1000원';

  // 숫자타입
  let ddd: number = 10;
  ddd = '철수';

  // 불린타입
  let eee: boolean = true;
  eee = false;
  eee = 'false'; // true <- 생긴건 false인데 실제 값은 true로 인식된다! 이런것들을 막기 위해 타입스크립트를 사용해줘야 한다.

  // 배열타입
  let fff: number[] = [1, 2, 3, 4, 5, '안녕하세요']; // number인데 배열이다.
  let ggg: string = ['철수', '영희', '훈이', 10];
  let hhh: (string | number)[] = ['철수', '영희', '훈이', 10]; // 타입을 추론해서 어떤 타입을 사용하는지 알아보기

  // 객체타입

  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string; // ? <- 있어도 되고 없어도 된다는 뜻
  }

  const profile: IProfile = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
  };

  profile.name = '훈이'; // 타입추론으로 이것만 가능
  profile.age = '8살';
  profile.hobby = '수영'; // profile에는 hobby라는것이 없다.

  // 함수타입 ******** 중요!!
  function add(num1: number, num2: number, unit: string): string{
    return num1 + num2 + unit
  }
  const result = add(1000,2000,"원") // 결과의 리턴타입도 예측가능

  function add2 = (num1: number, num2: number, unit: string): string =>{
    return num1 + num2 + unit
  }
  const result2 = add(1000,2000,"원") // 결과의 리턴타입도 예측가능


  // any 타입 <= 가급적 자제하는 것이 좋다.
  let qqq: any = "철수" // 자바스크립트와 동일
  qqq = 123
  qqq = true

  return <></>;
}
