import pikaRun from '../assets/pikaRun.gif'
export function LoadingPage({}) {
    return (
        <>
            <div className="loadingPage">
                <img src={pikaRun} alt="Running Pikachu" />
                <p>Loading...</p>
            </div>
        </>
    )
}
export default LoadingPage;