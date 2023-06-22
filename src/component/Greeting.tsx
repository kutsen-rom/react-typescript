type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greeting({
  name,
  messageCount = 0,
  isLoggedIn,
}: GreetProps) {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name} you have ${messageCount} unread messages!`
          : `Welcome Guest`}
      </h2>
    </div>
  );
}
