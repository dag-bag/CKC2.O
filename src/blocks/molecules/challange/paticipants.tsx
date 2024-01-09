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
              src={participant?.user?.avatar}
              username={participant?.user?.username}
            />
          )
        )}
      </div>
    </Card>
  </div>
);

export default Participants;
