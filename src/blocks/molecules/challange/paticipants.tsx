import Card from "@/blocks/UI/Card";
import { Winner } from "./winners";
const Participants = ({ participants }: any) => (
  <div>
    <Card title="Participants" className="mt-5">
      <div className="grid grid-cols-4 gap-3">
        {participants.map((participant: any) => (
          <Winner key={participant.id} {...participant.user} />
        ))}
      </div>
    </Card>
  </div>
);

export default Participants;
