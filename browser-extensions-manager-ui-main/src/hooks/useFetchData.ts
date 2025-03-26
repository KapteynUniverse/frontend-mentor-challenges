import { useState, useEffect } from "react";

interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export function useFetchData() {
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/data.json");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Extension[] = await response.json();
        setExtensions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchExtensions();
  }, []);

  return { extensions, loading, error };
}
