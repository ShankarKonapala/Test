//name - props
//component
// 1. First letter must be capital
// 2. It return a JSX element
// component - declaration
function Welcome({ name }) {
  // const name = "Likhith";
  console.log(name);
  return <div>Welcome component {name}</div>;
}
