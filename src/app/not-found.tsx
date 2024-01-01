import Link from "next/link";
import Image from "next/image";
import Heading from "@/blocks/atoms/Heading";
import Button from "@/blocks/atoms/Button";
export default function NotFound() {
  return (
    <div className="absolute inset-0 bg-white center">
      <div className="md:grid md:grid-cols-2 items-center p-5">
        <div className="relative aspect-w-5 aspect-h-5">
          <Image fill src={"/assets/not-found.jpg"} alt="not-found" />
        </div>
        <div className="space-y-2 md:block center flex-col">
          <span className="border-b">Error 404</span>
          <Heading
            size="large"
            className=" !font-amar !md:text-left !text-center"
          >
            There is Light in here too.
          </Heading>
          <p className="md:text-left text-center">
            But the page is missing or you assembled the link incorrectly
          </p>
          <div className="h-2" />
          <Link href="/dashboard">
            <Button animation="scale">Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
