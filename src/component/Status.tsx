type StatusProps = {
  status: 'loading' | 'success' | 'error'
};

export default function Status({status}: StatusProps) {
  const message =
    status === "loading"
      ? "Loading..."
      : status === "success"
      ? "Data fetched successfully"
      : status === "error"
      ? "Error fetching data"
      : "";

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
}
