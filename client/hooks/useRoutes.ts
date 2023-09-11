import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

const useRoutes = () => {
  const params = useParams();
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
