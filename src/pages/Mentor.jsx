import { useParams } from "react-router-dom";

// take mentor obj from reducer by context
// probably put in local state
// use it in UI

export default function Mentor() {
  const params = useParams();
  console.log(params);

  return <p>Hi, {params.name}</p>;
}
