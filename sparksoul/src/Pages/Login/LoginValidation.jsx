function validation(values){
    let error = {}

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    //validating the email
    if(values.email == ""){
        error.email = "Email should not be empty"
    } else if(!emailPattern.test(values.email)){
        error.email = "Enter correct email format. eg: example01@gmail.com"
    }else{
        error.email = ""
    }

    //validating the password
    if(values.password == ""){
        error.password = "Password should not be empty"
    } else if(!passwordPattern.test(values.password)){
        error.password = "Password didn't match"
    }else{
        error.password = ""
    }

    return error;
}

export default validation;