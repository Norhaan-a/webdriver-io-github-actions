class LoginAndRegister {

    static renderRegistrationForm() {
        return `
         <div class ="registerModal modal">
          <button class="closeRegisterModal">x</button>
          <form name="register">
           <h3>Register</h3>
           <input name"firstName" required type="text"
           min-length="1" max-length="100"
           placeholder="First name">
           <input name"lastName" type="text"
           min-length="1" max-length="100"
           placeholder="Last name">
           <input name"email" type="email" required
           placeholder="Email">
           <input name"password" type="password" required
           min-length="8" max-length="100"
           placeholder="Password">
           <button type="submit">Register</button>
          </form>
         </div>
        `;
    }

    static renderLoginForm() {
        return `
         <div class ="loginModal modal">
          <button class="closeLoginModal">x</button>
          <form name="login">
           <h3>Login</h3>
           <input name"firstName" required type="text"
           min-length="1" max-length="100"
           placeholder="First name">
           <input name"lastName" type="text"
           min-length="1" max-length="100"
           placeholder="Last name">
           <input name"email" type="email" required
           placeholder="Email">
           <input name"password" type="password" required
           min-length="8" max-length="100"
           placeholder="Password">
           <button type="submit">Login</button>
          </form>
         </div>`;
   }

   static readForm(formName) {
  // create an object that we will add properties to
  // the object will become our request body
        let reqBody = {};
        for (let el of document.forms[formName].elements) {
            if (el.type === 'submit') {
                continue; // don't excute any more command in this iteration of the loop
            }
            reqBody[el.name] = el.value;
   }
        return reqBody;
}

   static async postToServer(url, reqBody) {
       let rawResponse = await fetch(url, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(reqBody)
       });
       let response = await rawResponse.json();
       return response;
   }

   static addEvents() {

       listen('submit', 'form[name="register"]', async event => {
        // do not reload the page   
        event.preventDefault();

        let reqBody = this.readForm('register');
        let result = await this.postToServer('/api/users', reqBody);
        grabEl('.overlay').style.display = 'none';
        grabEl('.registerModal').style.display = 'none';
        alert('You are now registered! Welcome!');
        // reload the whole page (not ideal since it will delete our cart)
        location.reload();

});

        listen('submit', 'form[name="login"]', async event => {
     // do not reload the page   
         event.preventDefault();
         let reqBody = this.readForm(login);
         let result = await this.postToServer('/api/login', reqBody);
         if (result._error) {
             alert('Could not log in with that email/password!')
         }
         grabEl('.overlay').style.display = 'none';
         grabEl('.registerModal').style.display = 'none';
        // reload the whole page (not ideal since it will delete our cart)
         location.reload();
   });
}
}