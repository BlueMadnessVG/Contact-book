import React, { useEffect, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import AddIcon from "@mui/icons-material/Add";
import SadIcon from "../../../assets/icons/SadIcon";
import SideMenuItem from "./SideMenuItem";
import SideMenuCard from "./SideMenuCard";
import { useLoginStore } from "../../../global/login.store";
import { useAlertStore } from "../../../global/alerts.store";
import { useContactStore } from "../../../global/contact.store";
import { fetchContact } from "../../../services/api.services";

function Aside() {
  const [contacts, setContacts] = useState([]);
  const { userToken } = useLoginStore((state) => state);
  const { setShowAlert, setAlertMessage, setAlertSeverity } = useAlertStore(
    (state) => state
  );

  const getContact = async () => {
    const result = await fetchContact();
    console.log(result);
    setContacts(result.data);
  };

  useEffect(() => {
    if (userToken != null) getContact();
  }, [userToken]);

  const { setId } = useContactStore((state) => state);

  const handleAddClick = () => {
    if (!userToken) {
      setShowAlert(true);
      setAlertMessage("If you do not login, your data will not be saved.");
      setAlertSeverity("warning");
    }

    const existingContactIndex = contacts.findIndex(
      (contact) => contact.name === "New"
    );
    if (existingContactIndex !== -1) {
      // If contact with the same name exists, remove it before adding the new one
      const updatedContacts = [...contacts];
      updatedContacts.splice(existingContactIndex, 1, {
        name: "New",
        lastName: "Contact",
      });
      setContacts(updatedContacts);
    } else {
      // Otherwise, add the new contact to the contacts array
      setContacts([...contacts, { name: "New", lastName: "Contact" }]);
    }

    setId(-1);
  };

  return (
    <div className="flex flex-col flex-1 p-2 pt-4 bg-zinc-800 gap-2 border-r border-zinc-700 ">
      <header className="flex items-center gap-4 pl-2">
        <button>
          <DehazeIcon sx={{ fontSize: 30 }} />
        </button>
        <h2 className="text-2xl font-semibold"> CONTACT BOOK </h2>
      </header>

      <div className="relative flex px-4 pt-2 items-center bg-zinc-800 ">
        <div className="flex-grow border-t border-zinc-600"></div>
      </div>

      <ul onClick={handleAddClick}>
        <SideMenuItem>
          <AddIcon />
          Add Contact
        </SideMenuItem>
      </ul>

      <main
        className={`flex-1 py-2 gap-2 relative ${
          contacts.length <= 0 && `content-center `
        }`}
      >
        <div className="w-full">
          {contacts.length > 0 ? (
            contacts.map((item, index) => {
              return <SideMenuCard key={index} info={item} />;
            })
          ) : (
            <div className="flex flex-col items-center text-zinc-700">
              <SadIcon style={"h-20 w-20 m-0"} />
              <span className="font-bold"> YOU HAVE NO CONTACTS </span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Aside;
