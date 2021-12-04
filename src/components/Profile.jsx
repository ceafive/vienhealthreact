import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          className="rounded-full h-20 w-20"
          src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="profile_image"
        />
        <div className="absolute bottom-[-0px] right-[-0px] bg-green-500 p-2 rounded-full h-6 w-6 flex items-center justify-self-center">
          <ion-icon
            name="clipboard-outline"
            style={{
              color: "#fff",
            }}
          ></ion-icon>
        </div>
      </div>

      <div className="mt-2 text-center">
        <p className="text-brandDark my-1">Alex Assenmacher</p>
        <p className="text-[#767676] my-1">Home Buyer</p>
        <button className="bg-[#016450] rounded text-white text-sm px-8 py-2 my-2">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
