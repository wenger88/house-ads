// import { FunctionComponent, useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";
import { EmailAuthProvider, getAuth } from "@firebase/auth";
import firebaseui from "firebaseui";
import { FunctionComponent, useEffect, useState } from "react";

const firebaseAuthConfig: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: "/",
};

const FirebaseAuth: FunctionComponent = () => {
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    setRenderAuth(true);
  }, []);

  const auth = getAuth();
  return (
    <div className="mt-16">
      {renderAuth ? (
        <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={auth} />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
