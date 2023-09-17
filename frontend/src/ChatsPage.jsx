import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced' 
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
      '0c836b7c-82e2-438e-8391-6e5a23a2d962', 
      props.user.username, 
      props.user.secret
    );
  return (
    <div style={{ height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
  )
};

export default ChatsPage;