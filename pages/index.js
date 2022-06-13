import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  // Make sure we're in the browser
  if (typeof window !== "undefined") {
    router.push("/pl");
  }

  return <div>Loading...</div>;
}
