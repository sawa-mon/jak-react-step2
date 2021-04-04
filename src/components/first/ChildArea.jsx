import React, { memo } from 'react'

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props
  console.log("今、ChildAreaがレンダリングされたよ!!")

  const data = [...Array(500).keys()]
  data.forEach(() => {
    console.log("...")
  })
  return (
    <div>
      {open ? (
        <div>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : (
        null
      )}
    </div>
  )
});
