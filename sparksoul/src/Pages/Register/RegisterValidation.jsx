function SignupValidation(values){
    let error = {}

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const usernamePattern = /^[a-zA-Z0-9_\.]{3,20}$/;

    //validating the name
    if(values.name == ""){
        error.name = "Name should not be empty"
    }else{
        error.name = ""
    }

    //validating the email
    if(values.email == ""){
        error.email = "Email should not be empty"
    } else if(!emailPattern.test(values.email)){
        error.email = "Enter correct email format. eg: example01@gmail.com"
    }else{
        error.email = ""
    }

    //validating username
    if(values.username == ""){
        error.username = "Username should not be empty"
    } else if(!usernamePattern.test(values.username)){
        error.username = "Enter correct username format. eg: example01@test"
    }else{
        error.username = ""
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

export default SignupValidation;