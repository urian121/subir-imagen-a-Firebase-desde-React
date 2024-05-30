const Loading = () => {
  return (
    <div className="page-loading active">
      <div className="page-loading-inner">
        <div className="page-spinner"></div>
        <span>Enviando imagen...</span>
      </div>
    </div>
  );
};

export default Loading;
