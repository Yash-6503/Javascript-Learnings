function validateForm() {
    let formData = [];
    let isValid = true;

    let Fname = fname.value;
    let namePattern = /^[A-Za-z]+$/;
    if (namePattern.test(Fname)) {
        formData.push(Fname);
        fnm.value;
    } else {
        fnm.value = "Invalid name"; fnm.style.color = "red";
        isValid = false;
    }


    let Lname = lname.value;
    if (namePattern.test(Lname)) {
        formData.push(Lname);
    } else {
        lnm.value = "Invalid lname"; lnm.style.color = "red";
        isValid = false;
    }


    let Email = email.value;
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (emailPattern.test(Email)) {
        formData.push(Email)
    } else {
        em.value = "Invalid Email Address"; em.style.color = "red";
        isValid = false;
    }


    let Pass = password.value;
    let passPatern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passPatern.test(Pass)) {
        formData.push(Pass)
    } else {
        pwd.value = "Invalid Password"; pwd.style.color = "red";
        isValid = false;
    }


    let MobileNo = +mob.value;
    let ptrn = /^[6-9]\d{9}$/;
    if (ptrn.test(MobileNo)) {
        formData.push(MobileNo)
    } else {
        mb.value = "Mobile number is not valid"; mb.style.color = "red";
        isValid = false;
    }

    isValid ? console.log(formData) : console.log("Errors to show data");

}