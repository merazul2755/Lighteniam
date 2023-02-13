import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase.init";

const User = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    onValue(ref(db, "/user"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((udata) => {
          setUserData((oldArray) => [...oldArray, udata]);
        });
      }
    });
  }, []);

  return (
    <div className="max-w-[1440px] m-auto mb-48 mt-16">
      <div class="relative overflow-x-auto lg:w-2/3 px-4 m-auto">
        <table class="w-full text-left ">
          <caption className="text-left text-[42px] font-muli font-normal py-2 mb-7">
            User List
          </caption>
          <thead class="text-sm uppercase font-normal text-[#00000080] border-b">
            <tr className="">
              <th scope="col" class="px-6 py-4">
                First Name
              </th>
              <th scope="col" class="px-6 py-4">
                Last Name
              </th>
              <th scope="col" class="px-6 py-4">
                Email
              </th>
              <th scope="col" class="px-6 py-4">
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((data) => (
              <tr class="bg-white border-b text-sm font-normal text-[#000000CC]">
                <th
                  scope="row"
                  class="px-6 py-6 font-medium whitespace-nowrap "
                >
                  {data?.fname}
                </th>
                <td class="px-6 py-4">{data?.lname}</td>
                <td class="px-6 py-4">{data?.email}</td>
                <td class="px-6 py-4">{data?.password}</td>
              </tr>
            ))}
            <tr class="bg-white border-b ">
              <th
                scope="row"
                class="px-6 py-8 text-sm font-normal text-[#000000CC] whitespace-nowrap "
              >
                {userData?.length} User
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
