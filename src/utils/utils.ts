const logError = (
  className: string,
  functionName: string,
  errorMsg: string,
) => {
  console.log(`[${className}][${functionName}] - Error: ${errorMsg}`);
};

export { logError };
