// "use client";
// import { ReactNode } from "react";
// import { Provider as ReduxProvider } from "react-redux";
// import { SessionProvider } from "next-auth/react";
// import { store } from "@/redux/store";

// const Providers = ({ children }: { children: ReactNode }) => {
//   return (
//     <cleaReduxProvider store={store}>
//       <SessionProvider>{children}</SessionProvider>
//     </cleaReduxProvider>
//   );
// };

// export default Providers;

"use client";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider store={store}>
        {children}
    </ReduxProvider>
  );
};

export default Providers;
