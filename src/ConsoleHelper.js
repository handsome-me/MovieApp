const ConsoleHelper = (...data) => {
    if (process.env.NODE_ENV === 'production') return;
    data.map((element)=>{
      console.log(element);
    })
  }
  
  export default ConsoleHelper;