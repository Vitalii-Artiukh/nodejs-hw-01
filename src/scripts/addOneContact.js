import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contactsList = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...contactsList, newContact]);
  } catch (error) {
    console.error(error.message);
  }
};

addOneContact();
