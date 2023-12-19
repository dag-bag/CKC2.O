import Card from "@/blocks/UI/Card";
import BigAvatar from "@/blocks/atoms/BigAvatar";
const Participants = ({ participants }: any) => (
  <div>
    <Card title="Participants" className="mt-5">
      <div className="flex flex-wrap gap-5">
        {[...participants, ...participants, ...participants].map(
          (participant: any, index: any) => (
            <BigAvatar
              key={index}
              username={participant.user.username}
              src={participant.user.avatar}
            />
          )
        )}
      </div>
    </Card>
  </div>
);

export default Participants;
