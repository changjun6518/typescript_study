{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network


  function printLoginState(RLS:ResourceLoadState){
    if(RLS.state === 'loading'){
      console.log("loading...");
    }
    else if(RLS.state === 'success'){
      console.log(`${RLS.response.body}`);
    }
    else if(RLS.state ==='fail'){
      console.log(`${RLS.reason}`);
    }
  }
}
