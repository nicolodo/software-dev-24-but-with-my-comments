import AnotherClient from "@/components/AnotherClient";
import AnotherServer from "@/components/AnotherServer";
import Client from "@/components/Client";
import ComponentThatTakesChildren from "@/components/ComponentThatTakesChildren";
import Server from "@/components/Server";

export default function Page() {
  return (
    <div>
      {/* runs on the server */}
      <Server />
      {/* runs on the client */}
      <Client />
      {/* If you import a server component into a client componet ,that server component becomes a client component */}
      <AnotherClient />

      <AnotherServer />

      <ComponentThatTakesChildren>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>So many lost...</p>
        <AnotherServer />
      </ComponentThatTakesChildren>
    </div>
  )
}