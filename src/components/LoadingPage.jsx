import burger from './burger.svg'

const LoadingPage = () => {
    return (
        <div className="loading-page">

            <img src={burger} className='loading' alt='loading' />
            <h1 className="title-h1">Loading...</h1>
        </div>
    );
}

export default LoadingPage;