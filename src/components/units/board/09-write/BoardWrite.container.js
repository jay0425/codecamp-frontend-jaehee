import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { UPDATE_BOARD, 나의그래프큐엘셋팅 } from './BoardWrite.queries'; // export는 골라서 가져오기 가능
import BoardWriteUI from './BoardWrite.presenter'; // export deault로 한개만 가져오기
import { useRouter } from 'next/router';
// import asdf from './BoardWrite.presenter'; // export deault로 이름 바꿔서 가져오기
// import asdf, { apple } from './BoardWrite.presenter'; // export deault와 export 함께 가져오기

// import * as S from './BoardWrite.styles'; // export 한방에 다 가져오기
// S.BlueButton; // export 한방에 다 가져오기
// S.RedInput; // export 한방에 다 가져오기

export default function BoardWrite(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    try {
      const result = await 나의함수({
        variables: {
          // variables 이게 $ 역할을 함.
          writer: writer,
          title: title,
          contents: contents,
        },
      });
      console.log(result);
      router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = async () => {
    try {
      // 여기서 수정하기 하자!!
      const result = await updateBoard({
        variables: {
          number: Number(router.query.number),
          writer,
          title,
          contents,
        },
      });
      console.log(result);
      router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);

    if (event.target.value && title && contents) setIsActive(true);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);

    if (writer && event.target.value && contents) setIsActive(true);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);

    if (writer && title && event.target.value) setIsActive(true);
  };

  return (
    <div>
      <div>$$$$$$$$$$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$$$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isActive={isActive}
        isEdit={props.isEdit}
      />
      <div>$$$$$$$$$$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$$$$$$$$$$</div>
    </div>
  );
}
