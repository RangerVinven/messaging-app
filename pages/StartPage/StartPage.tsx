import { NextPage } from 'next';
import MainWindow from '../../components/StartPage/MainWindow';
import Sidebar from '../../components/StartPage/Sidebar';

const StartPage = () => {
    return (
        <div className="flex h-4/5 min-h-screen">
            <div>
                <Sidebar />
            </div>
            <div>
                <MainWindow />
            </div>
        </div>
    )
}

export default StartPage;