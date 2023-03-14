import {useRouteError} from 'react-router-dom';

const ErrorPage=()=>{
    const error = useRouteError();
    console.log(error);
    return(
        <>
            <div id='error-page'>
                <h1>خطا</h1>
                <p>متاسفیم , خطایی رخ داده است</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    );
}

export default ErrorPage;