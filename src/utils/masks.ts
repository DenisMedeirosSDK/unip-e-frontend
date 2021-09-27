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

export function inputMaskRG(event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 9;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4');
  event.currentTarget.value = value;
  return event;
}

export function inputMaskCNPJ(event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 18;
  let value = event.currentTarget.value;
  value = value.replace(
    /(\d{2})(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3/$4-$5'
  );
  event.currentTarget.value = value;
  return event;
}

export function inputMaskDate(event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 10;
  let value = event.currentTarget.value;
  value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  event.currentTarget.value = value;
  return event;
}

export function inputMaskPhone(event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 14;
  let value = event.currentTarget.value;
  value = value.replace(' ', '');
  value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  event.currentTarget.value = value;
  return event;
}
