interface Props {
	conversation: {
		id: Number,
		name: string
	}
}

export default function ConversationSelect(props: Props) {
  return (
    <div className='flex'>
        <div className='flex justify-center items-center mr-2'>
            <img src="#" alt="#" />
        </div>

        <div className='flex justify-center items-center'>
            <h3 className='text-2xl'>{props.conversation.name}</h3>
        </div>
		
    </div>
  )
}
