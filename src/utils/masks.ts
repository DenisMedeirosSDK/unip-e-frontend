export function inputMaskZipcode(event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 9;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  event.currentTarget.value = value;
  return event;
}

export function inputMaskRegistrationRA(
  event: React.FormEvent<HTMLInputElement>
) {
  event.currentTarget.maxLength = 7;
  let value = event.currentTarget.value;
  value = value.replace(/^(\w{6})(\w)/, '$1-$2');
  event.currentTarget.value = value;
  return event;
}
