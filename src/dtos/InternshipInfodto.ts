interface Address {
  zipcode: string;
  street: string;
  streetNumber: string;
  complement?: string;
  city: string;
  state: string;
}

interface InternshipInfoDTO {
  student: {
    name: string;
    registration: string;
    course: string;
    semester: string;
    office: string;
    address: {
      zipcode: string;
      street: string;
      streetNumber: string;
      complement?: string;
      city: string;
      state: string;
    };
  };
  company: {
    cnpj?: string;
    corporateName: string;
    fantasyName?: string;
    description: string;
    logo?: string;
    address: {
      zipcode: string;
      street: string;
      streetNumber: string;
      complement?: string;
      city: string;
      state: string;
    };
    phone1?: string;
    phone2?: string;
  };
  internship: {
    nameAdvisor: string;
    rgAdvisor: string;
    startDate: string;
    endDate: string;
    totalHours: string;
  };
}

export type { Address, InternshipInfoDTO };
