import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isMobile = useMediaQuery({ minWidth: 375 });
  const isTablet = useMediaQuery({ minWidth: 965 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return { isMobile, isTablet, isDesktop };
};

export default useResponsive;
