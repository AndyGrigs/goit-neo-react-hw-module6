import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import { BookOpen } from "lucide-react";
import { useSelector } from "react-redux";
import { selectContacts } from "./store/contactsSlice";
import { selectFilter } from "./store/filterSlice";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Phonebook</h1>
        </div>

        <ContactForm />
        <SearchBox />
        <ContactList contacts={filteredContacts} />
      </div>
    </div>
  );
}

export default App;
