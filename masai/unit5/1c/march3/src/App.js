function App() {
  var gi = 90;
  var arr = [1,2,3,4,5,6]
  return (
    <div className='App'>
    <h1 className='text-3xl font-bold underline animate-bounce hover:bg-red-500'>
      Hello world! {gi>10? "great work":"better"}
    </h1>
    {
      ((a)=>( 
        return a
       ))(100)
    }
    </div>
  );
}

export default App;