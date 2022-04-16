import MainWindow from '../../components/PageComponents/StartPage/MainWindow';
import Sidebar from '../../components/PageComponents/StartPage/Sidebar';

const StartPage = () => {
    return (
        <div className="flex h-screen">
            <div className='w-1/5'>
                <Sidebar />
            </div>
            <div className='w-4/5'>
                <MainWindow />
            </div>
        </div>
    )
}

export default StartPage;