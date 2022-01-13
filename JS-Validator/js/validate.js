function validate(){
    let f = false

    // validation

    // name field

    let name = $(".name-field").val();
    if(name==''||name==undefined){
        $(".name-field-msg").html("Name is required !!").addClass("text-danger")
        f = false
    }
    else{
        $(".name-field-msg").html("OK !!").removeClass("text-danger").addClass("text-success")
        f = true
    }

    // email field
    // exp accepts the correct format of email which is followed as example abc@gmail.com

    let email = $(".email-field").val()
    let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email==""||email==undefined){
        $(".email-field-msg").html("Email is required !!").addClass("text-danger")
        f = false
    } else if (exp.test(email)==false){
        $(".email-field-msg").html("Invalid email , email must contain @ , . () !!").addClass("text-danger")
        f = false
    }
    else{
        $(".email-field-msg").html("OK !!").removeClass("text-danger").addClass("text-success")
        f = true
    }

    // password field
    // passexp accepts between 6 to 20 characters where 1 should be upper case, 1 should be lower case and a special character

    let pass = $(".pass-field").val();
    let passexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

    if(pass == ""|| pass == undefined){
        $(".pass-field-msg").html("password is required !!").addClass("text-danger")
        f = false
    } else if (passexp.test(pass)==false){
        $(".pass-field-msg").html("Invalid Password format !!").addClass("text-danger")
        f = false
    }
    else{
        $(".pass-field-msg").html("Strong password !!").removeClass("text-danger").addClass("text-success")
        f = true
    }

    // number field

    let number = $(".num-field").val()
    if (number==""|| number == undefined){
        $(".num-field-msg").html("Mobile number is required !!").addClass("text-danger")
        f = false
    }
    else if(number.length == 10){
        $(".num-field-msg").html("OK !!").removeClass("text-danger").addClass("text-success")
        f = true
    }
    else if(typeof number != Number){
        $(".num-field-msg").html("invalid format. Numbers are expected.").addClass("text-danger")
        f = false
    }
    else{
        $(".num-field-msg").html("Number should be of 10 digits !!").addClass("text-danger")
        f = false
    }
    return f;
}