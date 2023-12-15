import { useMutation } from '@apollo/client';
import { useState, ChangeEvent } from 'react';
import { UPDATE_BOARD, 나의그래프큐엘셋팅 } from './BoardWrite.queries'; // export는 골라서 가져오기 가능
import BoardWriteUI from './BoardWrite.presenter'; // export deault로 한개만 가져오기
import { useRouter } from 'next/router';
import { IBoardWriteProps, IMyvariables } from './BoardWrite.types';
// import asdf from './BoardWrite.presenter'; // export deault로 이름 바꿔서 가져오기
// import asdf, { apple } from './BoardWrite.presenter'; // export deault와 export 함께 가져오기

// import * as S from './BoardWrite.styles'; // export 한방에 다 가져오기
// S.BlueButton; // export 한방에 다 가져오기
// S.RedInput; // export 한방에 다 가져오기

export default function BoardWrite(props: IBoardWriteProps) {
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
      // console.log(result);
      router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = async () => {
    const myvariables: IMyvariables = {
      number: Number(router.query.number),
    };
    if (writer) {
      myvariables.writer = writer;
    }
    if (title) {
      myvariables.title = title;
    }
    if (contents) {
      myvariables.contents = contents;
    }

    try {
      // 여기서 수정하기 하자!!
      const result = await updateBoard({
        variables: myvariables,
      });
      // console.log(result);
      router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value && title && contents) setIsActive(true);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);

    if (writer && event.target.value && contents) setIsActive(true);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
        data={props.data} // undefined 이거나, data 이거나 둘 중 하나!
      />
      <div>$$$$$$$$$$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$$$$$$$$$$</div>
    </div>
  );
}
