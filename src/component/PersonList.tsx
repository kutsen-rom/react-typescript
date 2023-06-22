// I know it should be PeopleList but to follow along I'll name it as it is in the tutorial
// Okay there're a lot of mispelling and grammar errors I'll just ignore it


import { Name } from "./Person.types";
type PersonListProps = {
  names: Name[]
};

export default function PersonList({names}: PersonListProps) {
  return (
    <div>
        {names.map((name) => <h2 key={name.first}>{name.first} {name.last}</h2>)}
    </div>
  );
}
