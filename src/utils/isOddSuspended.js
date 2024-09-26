const isOddSuspended = (runner) => {
  if (runner?.status !== "OPEN" && runner?.status !== "ACTIVE") {
    return 'suspended-event';
  }else{
    return 
  }
};

export default isOddSuspended;
