import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageType } from "./messageType";
import { Dispatch, SetStateAction } from "react";

function ScreenshotBuilder({
  message,
  messageUpdater,
}: {
  message: MessageType;
  messageUpdater: Dispatch<SetStateAction<MessageType | undefined>>;
}) {
  // Update functions.
  function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
    messageUpdater({
      ...message,
      username: event.target.value,
    });
  }
  function updateProfileUrl(event: React.ChangeEvent<HTMLInputElement>) {
    messageUpdater({
      ...message,
      profileURL: event.target.value,
    });
  }
  function updateMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
    messageUpdater({
      ...message,
      message: event.target.value,
    });
  }
  function updateImage(event: React.ChangeEvent<HTMLInputElement>) {
    messageUpdater({
      ...message,
      image: event.target.value,
    });
  }
  function updateTimestamp(event: React.ChangeEvent<HTMLInputElement>) {
    messageUpdater({
      ...message,
      timestamp: event.target.value,
    });
  }

  return (
    <div className="space-y-8">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          placeholder="Clyde"
          onChange={updateUsername}
        ></Input>
      </div>

      <div>
        <Label htmlFor="profile-url">Profile URL</Label>
        <Input
          id="profile-url"
          placeholder="https://media.discordapp.net/attachments/..."
          onChange={updateProfileUrl}
        ></Input>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder={`Rickrolling is an Internet meme involving the unexpected appearance of the music video for the 1987 song "Never Gonna Give You Up" by English singer Rick Astley. The meme grew out of a similar bait-and-switch trick called "duck rolling" that was popular on the 4chan website in 2006.`}
          className="h-32"
          onChange={updateMessage}
        ></Textarea>
      </div>
      <div>
        <Label htmlFor="image">Image (optional)</Label>
        <Input
          id="image"
          placeholder="https://media.discordapp.net/attachments/..."
          onChange={updateImage}
        ></Input>
      </div>
      <div>
        <Label htmlFor="timestamp">Timestamp</Label>
        <Input
          id="timestamp"
          placeholder="Today at 12:42"
          onChange={updateTimestamp}
        ></Input>
      </div>
    </div>
  );
}

export default ScreenshotBuilder;
