import { MessageType } from "./messageType";

function Faker({ message }: { message: MessageType }) {
  return (
    <>
      <div className="bg-[#323338]">
        <div className="flex flex-row space-x-2">
          <img
            src={message.profileURL}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="flex flex-row space-x-2">
              <p className="text-white">{message.username}</p>
              <p className="text-secondary">{message.timestamp}</p>
            </div>
            <p>{message.message}</p>
            {message.image ? (
              <img
                src={message.image}
                alt="Image"
                className="rounded-md max-h-96 max-w-96"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faker;
