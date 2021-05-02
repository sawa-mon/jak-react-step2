import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>ページ2です</h1>
      <Link to="/page2/9900">URL Parameter</Link>
      <br/>
      <Link to="/page2/9900?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
