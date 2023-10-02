import Button from "./components/shared/button";
import Input from "./components/shared/input";

export default function App() {
  return (
    <>
      <Input placeholder={"Enter your username"} name={"Username"}/>
      <Input placeholder={"Enter your email"} name={"Email adress"}/>
    </>
  );
}
