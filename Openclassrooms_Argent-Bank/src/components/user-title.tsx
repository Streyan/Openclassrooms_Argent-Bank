import { useSelector } from "react-redux";
import { selectUser, updateUsername } from "../features/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../app/store";

export type AppDispatch = typeof store.dispatch;

export default function UserTitle() {
  const [editMode, setEditMode] = useState<boolean>(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const handleEditName = () => {
    setEditMode(!editMode);
  };

  function submit(formData: any) {
    dispatch(updateUsername(formData.get("username")));
  }

  return (
    <div className="text-[#fff] mb-[2rem]">
      {editMode ? (
        <div>
          Edit Mode
          <form action={submit}>
            <div className="flex flex-col items-center gap-[0.5rem]">
              <div className="flex flex-row gap-[0.5rem]">
                Username:
                <input
                  type="text"
                  id="username"
                  name="username"
                  defaultValue={user?.userName}
                  className="border-[1px] border-solid border-white p-[0.3rem]"
                />
              </div>
              <div className="flex flex-row gap-[0.5rem]">
                First name:
                <input
                  type="text"
                  className="border-[1px] border-solid border-white p-[0.3rem]"
                  value={user?.firstName}
                  disabled
                />
              </div>
              <div className="flex flex-row gap-[0.5rem]">
                Last name:
                <input
                  type="text"
                  className="border-[1px] border-solid border-white p-[0.3rem]"
                  value={user?.lastName}
                  disabled
                />
              </div>
              <div className="flex flex-row gap-[3rem]">
                <button
                  className="border-[#00bc77] bg-[#00bc77] text-[#fff] font-bold p-[10px]"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="border-[#00bc77] bg-[#00bc77] text-[#fff] font-bold p-[10px]"
                  onClick={handleEditName}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-[0.5rem]">
            <h1>
              Welcome back
              <br />
              {user?.firstName} {user?.lastName} !
            </h1>
          </div>
          <button
            className="border-[#00bc77] bg-[#00bc77] text-[#fff] font-bold p-[10px]"
            onClick={handleEditName}
          >
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
}
