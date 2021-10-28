function graduate(credential) {
  const title = credential;
  return function (fullName) {
    console.log(`${fullName}, ${title}`);
  };
}

const medicalSchool = graduate('M.D');
const lawSchool = graduate('Esq.');

medicalSchool('Kenneth Wang');
lawSchool('Kenneth Wang');
