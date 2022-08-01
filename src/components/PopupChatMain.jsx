import SingleMessage from './SingleMessage'

const PopupChatMain = ({ chatHistory }) => (
  <div
    className="main-popup-chat-col"
    style={{ flexGrow: 1, overflow: 'auto', marginBlock: '0.5rem', marginRight: '10px' }}
  >
    {chatHistory &&
      chatHistory.map((message, index) => (
        <SingleMessage key={index} message={message} />
      ))}
  </div>
)
export default PopupChatMain
