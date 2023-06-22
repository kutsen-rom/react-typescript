type GreetProps = {
    name: string
}

export default function Greeting({name}: GreetProps) {
  return (
    <div>
      <h2>Welcome {name}</h2>
    </div>
  );
}
