import ConversationSelect from "../ConversationSelect/ConversationSelect";
interface Props {
    conversations: [
        {
            id: Number,
            name: string
        }
    ]
}

const Sidebar = (props: Props) => {
    return (
        <div className='h-screen w-full bg-gray-600'>
            <>
                {
                    props.conversations.map(conversation => (
                        <div className="ml-2 pt-10 hover:cursor-pointer mr-2">
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