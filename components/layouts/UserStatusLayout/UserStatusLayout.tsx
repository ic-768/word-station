import { ReactElement, useContext } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabaseClient";
import { UserSessionContext } from "../../../context/user-session";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

const UserStatusLayout = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  const [session] = useContext(UserSessionContext);

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <>
      <div className="absolute top-0 w-full h-8 bg-white text-black p-4 flex items-center z-10 whitespace-nowrap sm:h-12">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faUser} className="h-full w-4" />
          <span>{session?.user.email}</span>
        </div>
        <div className="ml-auto">
          <button
            className="bg-orange-600 flex gap-4 items-center py-0 px-2 text-white rounded hover:bg-orange-700 text-white sm:py-1 sm:px-4 transition-colors"
            onClick={onSignOut}
          >
            <FontAwesomeIcon icon={faRightFromBracket} className="sm:text-lg" />
            Log out
          </button>
        </div>
      </div>
      {children}
    </>
  );
};

export default UserStatusLayout;