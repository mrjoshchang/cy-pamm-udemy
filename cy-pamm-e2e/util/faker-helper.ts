import { faker } from "@faker-js/faker";

export function fetchFakerData(randomPersonData: string) {
  if (randomPersonData === "first name") {
    return faker.person.firstName();
  } else if (randomPersonData === "last name") {
    return faker.person.lastName();
  } else if (randomPersonData === "email") {
    return faker.internet.email();
  } else {
    throw new Error(`❌ ${randomPersonData} is invalid. ❌`);
  }
}
