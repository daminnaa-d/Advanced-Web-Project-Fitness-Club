export class Trainer {
  id: string;
  fullName: string;
  phoneNumber: string;
  specialization: string;

  constructor(id: string, fullName: string, phoneNumber: string, specialization: string) {
    this.id = id;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.specialization = specialization;
  }
}
