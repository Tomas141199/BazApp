const Error = ({ message }) => {
  return (
    <div className="alert alert-danger text-center p-1 mt-3" role="alert">
      {message}
    </div>
  );
};

export default Error;
