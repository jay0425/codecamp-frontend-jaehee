import { useMutation, gql } from '@apollo/client';

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "나나", title: "나나는 나나", contents: "나나나난ㄴ나나나나나") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };

  // 한 줄일때는 괄호() 필요 없음!
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
