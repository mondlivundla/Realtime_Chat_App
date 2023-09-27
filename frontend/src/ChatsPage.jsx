import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced' 
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
      'b9207f40-25eb-4582-9127-8a6709939c0c', 
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
