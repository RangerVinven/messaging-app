import { useEffect, useState } from 'react';
import ConversationSelect from "../ConversationSelect/ConversationSelect";

const Sidebar = () => {

    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/getConversations").then(response => response.json()).then(data => {
            setConversations(data);
        });
    }, []);

    return (
        <div className='h-screen w-full bg-gray-600 pt-3'>
            <>
                {
                    conversations.map(conversation => (
                        <div className="ml-2 mb-5 hover:cursor-pointer mr-2">
                            <ConversationSelect conversation={conversation} />
                            <hr />
                        </div>
                    ))
                }
            </>
        </div>
    )
}

export default Sidebar;