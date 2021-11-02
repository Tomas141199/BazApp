const Error = ({ message }) => {
  return (
    <div className="alert alert-danger text-center p-1" role="alert">
      {message}
    </div>
  );
};

export default Error;
