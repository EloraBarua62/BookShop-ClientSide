import React from 'react';

const SignUp = () => {

    const handleFormSubmit = event => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm_password.value;
        const address1 = event.target.address1.value;
        const address2= event.target.address2.value;
        const city = event.target.city.value;
        const state = event.target.state.value;
        const zipCode = event.target.zipCode.value;
        const country = event.target.country.value;
        const phone = event.target.phone.value;
        const image = event.target.image.value;
        const wishList = [event.target.wishList.value];

        const signUpCredential = {firstName , lastName ,email,password,confirmPassword, address1,address2,city,state,zipCode,country,phone,image, wishList};
        console.log(signUpCredential);

        const url = "http://localhost:5000/api/v1/user/signup";

        fetch(url, {
          method: 'POST',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signUpCredential),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder='First Name' name="firstName" />
                <input type="text" placeholder='Last Name' name="lastName" />
                <input type="email" placeholder='Email' name="email" />
                <input type="password" placeholder='Password' name="password" />
                <input type="password" placeholder='Confirm Password' name="confirm_password" />
                <input type="text" placeholder='1st Address' name="address1" />
                <input type="text" placeholder='Another address' name="address2" />
                <input type="text" placeholder='City' name="city" />
                <input type="text" placeholder='State' name="state" />
                <input type="number" placeholder='Zip Code' name="zipCode" />
                <input type="text" placeholder='Country' name="country" />
                <input type="text" placeholder='Phone' name="phone" />
                <input type="file" placeholder='Image' name="image" />
                <input type="text" placeholder='Wish List' name="wishList" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SignUp;