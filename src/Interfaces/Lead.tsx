export interface LeadData {
    salutation?:string
    leadImage?:string;
    firstName: string;
    lastName?: string;
    email: string;
    phone: string;
    website?: string;
    leadSource?: string;
    regionId: string;
    areaId: string;
    bdaId: string;
    companyId?: string;
    companyName?: string;
    companyPhone?: string;
    companyAddress?: string;
    pinCode?: string;
  }