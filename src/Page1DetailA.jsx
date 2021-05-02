import { useHistory, useLocation } from "react-router"

export const Page1DetailA = () => {
  const { state } = useLocation()
  console.log(state)

  const history = useHistory()

  const onClickBack = () => history.goBack()
  return (
    <div>
      <h1>ページ1詳細です</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  )
}