export default function CounterLetDocumentPage() {
  function onClickCountUp() {
    const count = Number(document.getElementById('qqq').innerText) + 1;
    document.getElementById('qqq').innerText = count;
  }

  function onClickCountDouwn() {
    const count = Number(document.getElementById('qqq').innerText) - 1;
    document.getElementById('qqq').innerText = count;
  }

  return (
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickCountDouwn}>카운트 내리기!!</button>
    </div>
  );
}
