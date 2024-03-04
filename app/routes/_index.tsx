import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProgressIndicator, type ProgressIndicatorProps } from "~/components/ProgressIndicator";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json<ProgressIndicatorProps>({ color: 'blue', percentComplete: 50 });
};

export default function Index() {
  const progressData = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-4">Progress Indicator</h1>
      <ProgressIndicator {...progressData} />
    </div>
  );
}
