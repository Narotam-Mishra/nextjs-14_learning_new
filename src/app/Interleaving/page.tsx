import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterleavePage() {
    return (
        <>
          <h1>Interleaving Page...</h1>
          {/* <ServerComponentOne /> */}
          <ClientComponentOne>
            <ServerComponentOne />
          </ClientComponentOne>
        </>
    )
}