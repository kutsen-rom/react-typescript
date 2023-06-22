type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ handleChange, value }: InputProps) {
    function handleInputChange({target}: React.ChangeEvent<HTMLInputElement>) {
        console.log(target.value)
    }
  return <input value={value} onChange={handleInputChange} type="text" />;
}
