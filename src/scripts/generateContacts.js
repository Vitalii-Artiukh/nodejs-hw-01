import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contactsList = await readContacts();
    const newContacts = Array(number).fill(1).map(createFakeContact);
    await writeContacts([...contactsList, ...newContacts]);
  } catch (error) {
    console.error(error.message);
  }
};

generateContacts(5);
