interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = "home",
}

// api
function fetchContacts(): Promise<Contact[]> {
  const contacts: Contact[] = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    return this.contacts.filter((contact) => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter((contact) => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map((contact) => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map((contact) => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
