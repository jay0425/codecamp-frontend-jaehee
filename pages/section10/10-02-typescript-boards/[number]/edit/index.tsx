import { useRouter } from 'next/router';
import BoardWrite from '../../../../../src/components/units/board/10-write/BoardWrite.container';
import { gql, useQuery } from '@apollo/client';

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return (
    <div>
      <BoardWrite isEdit={true} data={data} />
    </div>
  );
}
