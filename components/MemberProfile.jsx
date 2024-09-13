import { auth, currentUser, UserButton } from "@clerk/nextjs";

async function MemberProfile() {
  const user = await currentUser();
  const { userId } = auth();

  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutURL="/" />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}

export default MemberProfile;
