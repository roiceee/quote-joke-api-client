import { useAuth0 } from "@auth0/auth0-react";

import Footer from "../footer";
import LoadingScreen from "../loading-screen";
import NavigationBar from "../navbar";
import ServerDownAlert from "../server-down-alert";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function MainLayout({ children }: MainLayoutProps) {
  const auth = useAuth0();

  if (auth.isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <ServerDownAlert />
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
