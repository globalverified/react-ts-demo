interface IProps{
    error?: Error;
    resetErrorBounday?: ()=> void;
}
export function ErrorBoundayFallback(props: IProps){
   
    return(
        <div>
            Something went wrong :) dont worry 
            <pre>{props.error?.message}</pre>
            <button onClick={props.resetErrorBounday}>try again or contact SIVA OR ANCHAL</button>
        </div>
    )
}