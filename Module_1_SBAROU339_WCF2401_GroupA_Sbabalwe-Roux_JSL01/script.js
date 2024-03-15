function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters
    let petInfo = /^pet_\w+$/i;
    if(petInfo.test(input)){
        result = "Syntax Valid";
    }
    else{
        result = "Syntax Invalid";
    }

    document.getElementById('result').innerText = result;
}


