import { useSate, useState } from 'react';

export default function CounterLetDocumentPage() {
  // let 은 리액트 전용 html에서 변경을 감지하지 못함 (따라서, state 써야 됨)

  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1);
  }

  function onClickCountDouwn() {
    setCount(count - 1);
  }

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickCountDouwn}>카운트 내리기!!</button>
    </div>
  );
}
