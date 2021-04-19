import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>page1です</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
