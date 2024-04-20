const API_URL = 'http://127.0.0.1:5000';


const loginService = {
  getUsersByUsernameAndPassword: async (username, password) => {
    try {
      console.log('service getUsersByUsernameAndPassword ini ' + username)
      const response = await fetch(`${API_URL}/user?user_name=${username}&password=${password}`);
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }

      console.log('service getUsersByUsernameAndPassword end response.json()  ' + response);
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al obtener los usuarios');
    }

  },

  //COMPROBAR SI EL USUARIO EXISTE
  checkUserExists: async (username) => {
    try {
      console.log('email+username ' + username);
      const response = await fetch(`${API_URL}/user?user_name=${username}`);
      if (!response.ok) {
        throw new Error('Error al verificar la existencia del usuario');
      }
      const data = await response.json();
      console.log('data' + JSON.stringify(data));
      const usernames = [];

    // Iterar sobre cada objeto en el array de data
    data.forEach(user => {
      console.log(user); // Aquí obtienes el nombre de usuario de cada usuario
      usernames.push(user.user_name); // Almacenar el nombre de usuario en el array
    });

    console.log("USERNAMEEEEES");
    // Ahora tienes acceso a los nombres de usuario fuera del bucle forEach
    console.log(usernames);

    return usernames; // Ajusta según la estructura de tu respuesta
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al verificar la existencia del usuario');
    }
  },
  checkPersonExists: async (email) => {
    try {
      console.log('email ' + email);
      const response = await fetch(`${API_URL}/person?email=${email}`);
      if (!response.ok) {
        throw new Error('Error al verificar la existencia del email');
      }
      const data = await response.json();
      console.log('data ' + JSON.stringify(data));
  
      // Crear un array para almacenar los correos electrónicos
      const emails = [];
  
      // Iterar sobre cada objeto en el array de data
      data.forEach(person => {
        console.log(person.email); // Aquí obtienes el correo electrónico de cada persona
        emails.push(person.email); // Almacenar el correo electrónico en el array
      });
  
      // Ahora tienes acceso a los correos electrónicos fuera del bucle forEach
      console.log("EMAILS");
      console.log(emails);
  
      return emails; // Ajusta según la estructura de tu respuesta
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al verificar la existencia del email');
    }
  },
  addPerson: async (first_name, last_name, dni, birth_date, email, telephone, id_user) => {
    try {
      const response = await fetch(`${API_URL}/person`, {
        method: 'POST',                                                      
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name, last_name, dni, birth_date, email, telephone, id_user }),
      });
      if (!response.ok) {
        throw new Error('Error al registrar el usuario');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al guardar persona:', error);
      throw error;
    }
  },
  // addPerson: async (name, last_name, dni, birth_date, email, telephone, id_user) => {
  //   try {
  //     const response = await fetch(`${API_URL}/person/`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name, last_name, dni, birth_date, email, telephone, id_user }),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Error al registrar el usuario');
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Ocurrió un error al registrar el usuario');

  //   }
  // },
  addUser: async (user_name, password, userType) => {
    try {
      const response = await fetch(`${API_URL}/userL`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_name, password, userType }),
      });
      if (!response.ok) {
        throw new Error('Error al registrar el usuario');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Ocurrió un error al registrar el usuario');

    }
  }
};

export default loginService;