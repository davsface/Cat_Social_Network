
//bind buttons at page load
document.addEventListener('DOMContentLoaded', bindButtons);
//function to bind all buttons
function bindButtons() {
    document.getElementById('emailSubmit').addEventListener('click', function(event){
        //prevent default click behavior
        event.preventDefault();
        //set request and payload variables
        var req = new XMLHttpRequest();
        var payload = {input:null};
        //assign user input to payload input
        payload.input = document.getElementById('email').value;
        //open new post request and set request header

        req.open('POST', ' http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php',true);
        req.setRequestHeader('Content-Type', 'application/json');
        //if post response received post to window, else log error
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("email sent")
                console.log(req.response)
            } else {
                console.log("Error in network request: " + response.statusText);
            }});
        //send request
        req.send(JSON.stringify(payload));
    });
}
