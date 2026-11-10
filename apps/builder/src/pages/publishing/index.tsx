import { env } from "@typebot.io/env";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";

const publishingEmbedUrl = (
  env.NEXT_PUBLIC_PUBLISHING_EMBED_URL ??
  `${(env.NEXT_PUBLIC_POSTIZ_URL ?? "http://localhost:4007").replace(/\/$/, "")}/launches`
).trim();

/** MASTER: Publicações (calendário/canais) — UI do subsistema publishing no mesmo produto. */
export default function PublishingPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <DashboardHeader />
      <main className="flex-1 min-h-0 bg-gray-1">
        <iframe
          title="Publicações MASTER"
          src={publishingEmbedUrl}
          className="w-full h-full border-0"
          allow="clipboard-read; clipboard-write"
        />
      </main>
    </div>
  );
}
