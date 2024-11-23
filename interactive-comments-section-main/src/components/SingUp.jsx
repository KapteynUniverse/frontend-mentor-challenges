import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "/src/config/firebase.js";

// Sign-up with google auth
function SignUp() {
  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      console.log("User created successfully:", userCredential.user);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <button
      className="bg-blue-modarate text-white hover:opacity-50"
      onClick={signInWithGoogle}
    >
      Sign in with Google to send a message
    </button>
  );
}

export default SignUp;
